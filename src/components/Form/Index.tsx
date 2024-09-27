import React, { FormEvent, useState } from 'react';
import { ResponseData } from '../../@types/ResponseData';

import { ContainerInput, Container } from './styles';
import { getCep } from '../../hooks/getCep';
import { formatCep } from '../../utils/formatCep';

interface FormProps {
  setData: (data: ResponseData | undefined) => void;
  isLoading: boolean;
  setIsLoading: (boolean: boolean) => void;
}

export function Form({ setData, setIsLoading, isLoading }: FormProps) {
  const [error, setError] = useState('');
  const [cep, setCep] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setData(undefined);

    if (!cep || cep.length < 9) return setError('CEP inválido.');

    setIsLoading(true);
    try {
      const data = await getCep(cep);
      setData(data);

      return setIsLoading(false);
    } catch (err) {
      setError(err.message);
      return setIsLoading(false);
    }
  }

  return (
    <Container className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="">
        <p>Digite seu CEP:</p>

        <ContainerInput>
          <input
            placeholder="Ex: 08474012"
            maxLength={9}
            className={error ? 'errorInput' : 'CEP success'}
            onChange={(e) => setCep(formatCep(e.target.value))}
            value={cep}
          />
          {error && <p>*{error}</p>}
        </ContainerInput>

        <button className="button" disabled={isLoading} type="submit">
          Buscar CEP
        </button>
      </label>
    </Container>
  );
}
