import styled from 'styled-components';

export const Container = styled.div`
  text-align: right;

  @media (max-width: 950px) {
    text-align: center;
    margin-top: 4rem;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    cursor: pointer;

    font-style: italic;
    text-decoration: none;
    font-weight: 600;

    transition: filter 300ms;

    &:hover {
      filter: brightness(0.4);
      text-decoration: underline;
      text-underline-offset: 0.2em;
    }
  }
`;
