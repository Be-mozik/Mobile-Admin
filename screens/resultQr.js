import { StyleSheet,
        View,
        Text,
        TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import React, { useEffect, useState } from 'react';

const ResultQr = () => {
    return(
        <View style={styles.background}>
            <Icon name="logout" size={30} color="white" style={styles.icon} />
            <View style={styles.background_text}>
            <View style={styles.container_text}>
                    <Text style={styles.title}>Informations sur le ticket</Text>
                    <Text>Nom et prénom: </Text>
                    <Text>Événement: </Text>
                    <Text>Billet: </Text>
                    <Text>Nombre: </Text>
                    <Text>Validité: </Text>
                </View>
                <View style={styles.btn_container}>
                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.text_btn}>Valider</Text>
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
    icon: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    background_text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: "auto",
        backgroundColor: "#FCFAFA",
        paddingBottom: 30,
        borderRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    container_text: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
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
    text_btn: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: 16, 
    }
});

export default ResultQr;