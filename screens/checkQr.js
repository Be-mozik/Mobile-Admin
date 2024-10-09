import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { camQr } from "../api/callApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

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
      await AsyncStorage.setItem('ticket',result);

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
      <Icon name="logout" size={30} color="white" style={styles.icon} />
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
  icon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});

export default CheckQr;
