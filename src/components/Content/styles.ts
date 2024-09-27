import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: 150px;

  h1 {
    font-weight: 600;
  }

  p {
    font-size: 1.5em;
    margin-bottom: 30px;
  }

  @media (max-width: 950px) {
    display: block;

    div {
      max-width: auto;
    }
  }
`;

export const ContentText = styled.div`
  max-width: 400px;
`;
