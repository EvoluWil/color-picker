import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useBlue } from '../context/blue.context';
import { Entrada } from './entrada.component';

export const Blue = () => {
  const { blueValue, setBlueValue } = useBlue();
  return (
    <View style={styles.container}>
      <Entrada value={blueValue} setValue={setBlueValue} rotulo={'Blue'} />
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
