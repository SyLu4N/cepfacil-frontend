import { useContext } from 'react';
import { CepContext } from '../context/CepContext';

export function useCep() {
  const { locais, saveLocal } = useContext(CepContext);

  return { locais, saveLocal };
}
