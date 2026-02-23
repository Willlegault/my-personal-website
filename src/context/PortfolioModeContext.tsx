import { createContext, useContext, useState } from 'react';
import type { FC, ReactNode } from 'react';

export type PortfolioMode = 'swe' | 'biotech';

interface PortfolioModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
}

const PortfolioModeContext = createContext<PortfolioModeContextType>({
  mode: 'swe',
  setMode: () => {},
});

export const PortfolioModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PortfolioMode>('swe');
  return (
    <PortfolioModeContext.Provider value={{ mode, setMode }}>
      {children}
    </PortfolioModeContext.Provider>
  );
};

export const usePortfolioMode = () => useContext(PortfolioModeContext);
