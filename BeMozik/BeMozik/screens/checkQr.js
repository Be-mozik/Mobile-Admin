import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { camQr } from "../api/callApi";

const CheckQr = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    try {
      const response = await camQr(data);
      const result = await response.json();
      if (result.error) {
        Alert.alert("Erreur", result.error);
        return;
      }
      Alert.alert('Success', JSON.stringify(result));
    } catch (error) {
      Alert.alert('Erreur', 'Échec de la recherche du ticket.');
      console.error(error);
    } finally {
      setScanned(false);
    }
  };

  if (hasPermission === null) {
    return <Text>Demande de permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Accès caméra refusé</Text>;
  }

  return (
    <View style={styles.background}>
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
      <Text style={styles.text}>Scannez le QR code du billet</Text>
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
  cameraContainer: {
    width: '80%',
    height: '50%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  camera: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontWeight: "300",
    fontSize: 15,
    marginTop: 10,
  },
});

export default CheckQr;
