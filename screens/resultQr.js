import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ResultQr = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { ticket } = route.params;

    const handleDeco = async () => {
        try {
          await AsyncStorage.removeItem("userToken");
          navigation.replace('Login');        
        } catch (error) {
          console.error(error);
        }
    }

    const handleReturn = () => {
        navigation.replace('Check');
    };

    return (
        <View style={styles.background}>
            <View style={styles.iconContainer}>
                <IonIcon name="return-down-back-sharp" size={30} color="white" style={styles.icon} onPress={handleReturn}/>
                <SimpleLineIcon name="logout" size={30} color="white" style={styles.icon}  onPress={handleDeco} />
            </View>
            <View style={styles.background_text}>
                <View style={styles.container_text}>
                    <Text style={styles.title}>Informations sur le ticket</Text>
                    {ticket ? (
                        <>
                            <Text style={styles.infoText}>
                                Nom et prénom: <Text style={styles.valueText}>{ticket.nomclient} {ticket.prenomclient}</Text>
                            </Text>
                            <Text style={styles.infoText}>
                                Événement: <Text style={styles.valueText}>{ticket.nomevenement}</Text>
                            </Text>
                            <Text style={styles.infoText}>
                                Billet: <Text style={styles.valueText}>{ticket.nombillet}</Text>
                            </Text>
                            <Text style={styles.infoText}>
                                Nombre: <Text style={styles.valueText}>{ticket.nombre}</Text>
                            </Text>
                            <Text style={styles.infoText}>
                                Validité: <Text style={styles.valueText}>{ticket.estvalide ? "Valide" : "Non valide"}</Text>
                            </Text>
                        </>
                    ) : (
                        <Text style={styles.loadingText}>Chargement...</Text>
                    )}
                </View>
                <View style={styles.btn_container}>
                    {ticket ? (
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.text_btn}>Valider</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.btn_disable} disabled>
                            <Text style={styles.text_btn}>Valider</Text>
                        </TouchableOpacity>
                    )}
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
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 50,
    },
    icon: {

    },
    background_text: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FCFAFA",
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    container_text: {
        flexDirection: 'column',
        width: '100%',
        gap: 15,
    },
    infoText: {
        fontSize: 18,
        color: '#555',
        marginVertical: 5,
    },
    valueText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#007BFF',
    },
    loadingText: {
        fontSize: 16,
        color: '#888',
    },
    btn_container: {
        marginTop: 45,
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
    btn_disable: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 230,
        height: 50,
        backgroundColor: '#5e5e5e',
        borderRadius: 20,
    },
    text_btn: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: 16,
    },
});

export default ResultQr;
