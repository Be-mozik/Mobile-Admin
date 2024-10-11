import React from 'react';
import LoginScreen from './screens/loginScreen';
import CheckQr from './screens/checkQr';
import ResultQr from './screens/resultQr';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Check" component={CheckQr} options={{ headerShown: false }}/>
        <Stack.Screen name="Result" component={ResultQr} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
