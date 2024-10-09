import {
    StyleSheet,
    View,
  } from "react-native";
import { RNCamera } from 'react-native-camera';
import { camQr } from "../api/callApi";
import React, { useState } from 'react';

  
  const CheckQr = () => {
    const [qrId,setQrId] = useState(null);

    return (
      <View style={styles.background}>
          <RNCamera
            style={{ flex: 1, width: '100%' }}
            onBarCodeRead={handleQRCodeRead}
            captureAudio={false}
          />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00639B",
    }
  });
  
  export default CheckQr
  