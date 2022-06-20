import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useGreen } from '../context/green.context';
import { Entrada } from './entrada.component';

export const Green = () => {
  const { greenValue, setGreenValue } = useGreen();
  return (
    <View style={styles.container}>
      <Entrada value={greenValue} setValue={setGreenValue} rotulo={'Green'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8
  }
});
