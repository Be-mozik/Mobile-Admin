import { StyleSheet, Text, View } from 'react-native';
import CheckQr from './screens/checkQr';

export default function App() {
  return (
    <CheckQr></CheckQr>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
