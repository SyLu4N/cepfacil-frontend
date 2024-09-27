import React, { createContext, useEffect, useState, ReactNode } from 'react';

import { fetchLocais } from '../hooks/fetchLocais';
import { Local } from '../@types/Local';
import { postLocal } from '../hooks/postLocal';

interface CepProviderProps {
  children: ReactNode;
}

interface CepContextProps {
  locais: Local[];
  saveLocal: (local: Omit<Local, 'id'>) => Promise<void>;
}

export const CepContext = createContext<CepContextProps>({} as CepContextProps);

export function CepProvider({ children }: CepProviderProps) {
  const [locais, setLocais] = useState<Local[]>([]);

  useEffect(() => {
    renderLocais();
  }, []);

  async function renderLocais() {
    const locais = await fetchLocais();
    setLocais(locais);
  }

  async function saveLocal(local: Omit<Local, 'id'>) {
    const newLocal = await postLocal(local);
    setLocais((locais) => [...locais, newLocal]);
  }

  return (
    <CepContext.Provider value={{ locais, saveLocal }}>
      {children}
    </CepContext.Provider>
  );
}
