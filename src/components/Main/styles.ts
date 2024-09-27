import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: auto;
  margin-top: 8rem;

  @media (max-width: 950px) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .titleContainer {
    max-height: 150px;

    h1 {
      font-weight: 600;
    }

    p {
      font-size: 1.5em;
      margin-bottom: 30px;
      max-width: 400px;
    }

    @media (max-width: 950px) {
      display: block;

      div {
        max-width: auto;
      }
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  img {
    width: 30vw;
  }

  @media (max-width: 950px) {
    display: block;
    height: 2px;
    position: static;
    min-width: auto;

    img {
      display: none;
    }
  }
`;
