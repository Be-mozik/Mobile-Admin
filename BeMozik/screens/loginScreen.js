import React, { useState } from 'react';
import { connexion } from '../api/callApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
} from 'react-native';

const LoginScreen = () => {
    const [mail, setMail] = useState("");
    const [mdp, setMdp] = useState("");

    const handleLogin = async () => {
        if (!mail || !mdp) {
            Alert.alert("Erreur", "Veuillez remplir tous les champs.");
            return;
        }
        try {
            const donne = { mail, pass: mdp };
            const rep = await connexion(donne);
            if (rep.message) {
                Alert.alert("Échec de la connexion.", rep.message);
                return;
            }
            if (rep.token) {
                await AsyncStorage.setItem('userToken',rep.token);
            }
        } catch (error) {
            Alert.alert("Échec de la connexion", "Échec de la connexion.");
            console.error(error);
        }
    };
    return (
        <View style={styles.background}>
            <View style={styles.background_input}>
                <Image source={require("../assets/Logo.png")} style={styles.header_login} />
                <View style={styles.container_input}>
                    <TextInput
                        style={styles.inputs}
                        placeholder='Email'
                        placeholderTextColor="#797979"
                        value={mail}
                        onChangeText={setMail}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder='Mot de passe'
                        placeholderTextColor="#797979"
                        secureTextEntry
                        value={mdp}
                        onChangeText={setMdp}
                    />
                </View>
                <View style={styles.btn_container}>
                    <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                        <Text style={styles.text_btn}>Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00639B",
    },
    background_input: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "auto",
        backgroundColor: "#FCFAFA",
        paddingBottom: 30,
        borderRadius: 20,
        padding: 20,
    },
    header_login: {
        width: 115,
        height: 100,
        marginBottom: 40,
    },
    container_input: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    inputs: {
        width: '100%',
        height: 60,
        borderRadius: 20,
        borderColor: '#3DBEE9',
        borderWidth: 1,
        backgroundColor: '#eaeaea',
        color: '#797979',
        paddingLeft: 15,
        marginBottom: 15,
    },
    btn_container: {
        marginTop: 20,
        justifyContent: 'center',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 230,
        height: 50,
        backgroundColor: '#EB8218',
        borderRadius: 20,
    },
    text_btn: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: 16, 
    }
});

export default LoginScreen;