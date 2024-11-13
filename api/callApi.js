import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = 'http://10.0.2.2:5000/api';

export const connexion = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/utilisateur/connexion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Échec de la requête');
        }
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error(error, "Erreur lors de l'appel à l'API");
        throw error;
    }
};

export const camQr = async (id) => {
    try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await fetch(`${BASE_URL}/achat/check/billet/${id}`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if(!response.ok){
            throw new Error('Échec de la requête',response);
        }
        return response;
    } catch (error) {
        console.error(error, "Erreur lors de l'appel à l'API");
        throw error;
    }
};

export const validerBillet = async (token) => {
    try {
        const tokenUser = await AsyncStorage.getItem('userToken');
        const response = await fetch(`${BASE_URL}/achat/modifier/${token}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${tokenUser}`,
                'Content-Type': 'application/json',
            },
        });
        if(!response.ok){
            throw new Error('Échec de la requête');
        }
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
