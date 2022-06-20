import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View } from 'react-native';

interface EntradaProps {
  value: string;
  setValue: (value: string) => void;
  rotulo: string;
}

export const Entrada: React.FC<EntradaProps> = ({
  value,
  setValue,
  rotulo
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TextInput style={styles.entrada} value={value} onChangeText={setValue} />
      <StatusBar style="auto" />
    </View>
  );
};

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
