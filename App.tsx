import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppContext } from './src/context/app.context';
import { Text, StyleSheet } from 'react-native';
import { Bloco } from './src/components/bloco.component';
import { Container } from './src/components/container.component';

export default function App() {
  return (
    <AppContext>
      <Container>
        <Text style={styles.title}>Color Picker RGB</Text>
        <Bloco />
        <Bloco />
        <StatusBar style="auto" />
      </Container>
    </AppContext>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#f0f0f0',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8
  }
});
