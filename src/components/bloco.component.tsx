import { StyleSheet, View } from 'react-native';
import { Blue } from './blue.component';
import { Green } from './green.component';
import { Red } from './red.component';

export const Bloco = () => {
  return (
    <View style={styles.container}>
      <Red />
      <Green />
      <Blue />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
    backgroundColor: '#ecf0f1'
  }
});
