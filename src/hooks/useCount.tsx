import { createContext, useState, useContext, ReactNode } from 'react';

interface CountProviderProps {
  children: ReactNode;
}

interface CountContextData {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountContext = createContext<CountContextData>({} as CountContextData);

export function CountProvider({ children }: CountProviderProps) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export function useCount() {
  const context = useContext(CountContext);

  return context;
}