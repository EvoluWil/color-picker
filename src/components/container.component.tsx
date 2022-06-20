import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useRed } from '../context/red.context';
import { useBlue } from '../context/blue.context';
import { useGreen } from '../context/green.context';

type ContainerProps = {
  children: any;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const { redValue } = useRed();
  const { greenValue } = useGreen();
  const { blueValue } = useBlue();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  }
});
