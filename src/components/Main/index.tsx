import React, { useState } from 'react';

import { Container, Content, Image } from './styles';
import { Form } from '../Form/Index';
import { Result } from '../Result';
import { Loading } from '../Loading';
import { ResponseData } from '../../@types/ResponseData';
import { Detalhes } from '../../components/Detalhes';

export function Main() {
  const [data, setData] = useState<ResponseData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <Content>
        <div className="titleContainer">
          <h1>CONSULTAR CEP</h1>

          <p className="description">
            É a solução definitiva para cadastro de endereço e consulta do
            código postal do Brasil.
          </p>
        </div>

        <Form
          setData={setData}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />

        {isLoading ? <Loading /> : data && <Result data={data} />}
      </Content>

      <Image>
        <img src="/assets/location.svg" alt="Icone de localização" />
        <Detalhes />
      </Image>
    </Container>
  );
}
