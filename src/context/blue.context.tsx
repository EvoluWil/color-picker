import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

interface BlueContextData {
  blueValue: string;
  setBlueValue: (value: string) => void;
}

type BlueContextProps = {
  children: ReactNode;
};

const BlueContext = createContext({} as BlueContextData);

const BlueProvider: React.FC<BlueContextProps> = ({ children }) => {
  const [blueValue, setBlueValue] = useState('100');

  const providerValue = useMemo(
    () => ({
      blueValue,
      setBlueValue
    }),
    [blueValue, setBlueValue]
  );
  return (
    <BlueContext.Provider value={providerValue}>
      {children}
    </BlueContext.Provider>
  );
};

const useBlue = () => {
  const context = useContext(BlueContext);

  if (!context) {
    throw new Error('useBlue must be used within an BlueProvider');
  }

  return context;
};

export { useBlue, BlueProvider };
