import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export function Detalhes() {
  return (
    <Container>
      <Link to="/locais">Ver locais salvos</Link>
    </Container>
  );
}
