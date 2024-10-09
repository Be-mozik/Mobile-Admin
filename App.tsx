import { StyleSheet, Text, View } from 'react-native';
import ResultQr from './screens/resultQr';

export default function App() {
  return (
    <ResultQr></ResultQr>
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
