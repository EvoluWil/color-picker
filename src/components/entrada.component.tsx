import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  rotulo: {
    color: '#555',
    fontSize: 12,
    fontWeight: 'bold'
  },
  entrada: {
    color: '#444',
    borderWidth: 2,
    padding: 5,
    borderColor: '#555',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: '#ecf0f1'
  }
});
