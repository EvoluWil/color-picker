import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppContext } from './src/context/app.context';
import { Bloco } from './src/components/bloco.component';
import { Container } from './src/components/container.component';

export default function App() {
  return (
    <AppContext>
      <Container>
        <Bloco />
        <Bloco />
        <StatusBar style="auto" />
      </Container>
    </AppContext>
  );
}
