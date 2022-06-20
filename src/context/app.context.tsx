import React from 'react';
import { BlueProvider } from './blue.context';
import { GreenProvider } from './green.context';
import { RedProvider } from './red.context';

export const AppContext: React.FC = ({ children }) => {
  return (
    <>
      <BlueProvider>
        <GreenProvider>
          <RedProvider>{children}</RedProvider>
        </GreenProvider>
      </BlueProvider>
    </>
  );
};
