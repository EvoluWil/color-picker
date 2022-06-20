import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRed } from '../context/red.context';
import { Entrada } from './entrada.component';

export const Red = () => {
  const { redValue, setRedValue } = useRed();
  return (
    <View style={styles.container}>
      <Entrada value={redValue} setValue={setRedValue} rotulo={'Red'} />
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
