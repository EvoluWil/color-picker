import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState
} from 'react';

interface RedContextData {
  redValue: string;
  setRedValue: (value: string) => void;
}

type RedContextProps = {
  children: ReactNode;
};

const RedContext = createContext({} as RedContextData);

const RedProvider: React.FC<RedContextProps> = ({ children }) => {
  const [redValue, setRedValue] = useState('');

  const providerValue = useMemo(
    () => ({
      redValue,
      setRedValue
    }),
    [redValue, setRedValue]
  );
  return (
    <RedContext.Provider value={providerValue}>{children}</RedContext.Provider>
  );
};

const useRed = () => {
  const context = useContext(RedContext);

  if (!context) {
    throw new Error('useRed must be used within an RedProvider');
  }

  return context;
};

export { useRed, RedProvider };
