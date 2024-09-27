import React, { useState } from 'react';
import { ModalResult } from '../ModalResult';

import { Container, Save } from './styles';
import { ResponseData } from '../../@types/ResponseData';

interface ResultProps {
  data: ResponseData | undefined;
}

export function Result({ data }: ResultProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <Container className={data ? 'result' : 'hidden'}>
      <div>
        <p>Cep: {data?.cep}</p>

        <div className="flex">
          <input type="text" value={data?.logradouro} disabled />
          <input type="text" disabled value={data?.bairro} />
        </div>

        <input type="text" disabled value={data?.localidade} />
        <input type="text" disabled value={data?.uf} />

        <span onClick={onOpen}>Salvar local</span>
      </div>

      <Save>
        <ModalResult isOpen={isOpen} onClose={onClose} data={data} />
      </Save>
    </Container>
  );
}
