import React from 'react';

import { Container } from './styled';

export default function error404() {
  return (
    <Container>
      <div>
        <h2>A página que você procura não existe!</h2>
        <p>Deseja voltar ao inicio?</p>
        <div>
          <a href="/">Voltar ao inicio</a>
        </div>
      </div>

      <img src="/assets/404.svg" alt="Imagem de error" />
    </Container>
  );
}
