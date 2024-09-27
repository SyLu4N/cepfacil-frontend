import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

import { Container, Content, Locais, Void } from './styled';
import { Link } from 'react-router-dom';
import { useCep } from '../../hooks/useCep';

export function Local() {
  const { locais } = useCep();

  return (
    <>
      {locais.length >= 1 ? (
        <Locais>
          <Container>
            {locais.map((local) => (
              <Content key={local.id}>
                <span>{local.name}</span>

                <div>|</div>

                <p>
                  {`${local.logradouro}, ${local.number} - ${local.bairro}, ${local.localidade}`}
                </p>
              </Content>
            ))}
          </Container>
          <div className="back">
            <Link to="/">
              <BsFillArrowLeftSquareFill size={20} /> Voltar
            </Link>
          </div>
        </Locais>
      ) : (
        <Void>
          <div>
            <h2>Ainda não temos locais salvos</h2>
            <p>Vamos salvar novos contatos?</p>
            <div>
              <Link to="/">Salvar novos locais</Link>
            </div>
          </div>
          <img src="/assets/voidLocais.svg" alt="Tela em construção" />
        </Void>
      )}
    </>
  );
}
