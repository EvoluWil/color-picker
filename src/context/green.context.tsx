import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState
} from 'react';

interface GreenContextData {
  greenValue: string;
  setGreenValue: (value: string) => void;
}

type GreenContextProps = {
  children: ReactNode;
};

const GreenContext = createContext({} as GreenContextData);

const GreenProvider: React.FC<GreenContextProps> = ({ children }) => {
  const [greenValue, setGreenValue] = useState('');

  const providerValue = useMemo(
    () => ({
      greenValue,
      setGreenValue
    }),
    [greenValue, setGreenValue]
  );
  return (
    <GreenContext.Provider value={providerValue}>
      {children}
    </GreenContext.Provider>
  );
};

const useGreen = () => {
  const context = useContext(GreenContext);

  if (!context) {
    throw new Error('useGreen must be used within an GreenProvider');
  }

  return context;
};

export { useGreen, GreenProvider };
