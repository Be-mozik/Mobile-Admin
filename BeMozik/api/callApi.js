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
        const response = await fetch(`${BASE_URL}/achat/check/billet/${id}`);
        if(!response.ok){
            throw new Error('Échec de la requête');
        }
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error(error, "Erreur lors de l'appel à l'API");
        throw error;
    }
};
