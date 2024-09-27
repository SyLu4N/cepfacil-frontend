import styled from 'styled-components';

export const Container = styled.form`
  p {
    margin-bottom: 0.2rem;
    margin-left: 1.4rem;

    font-weight: 600;
    color: var(--colorstandard);
  }

  .success:focus {
    box-shadow: 0px 0px 4px var(--colorstandard);
  }

  .errorInput {
    box-shadow: 0px 0px 4px var(--colorError);
  }

  .errorInput input:focus {
    box-shadow: 0px 0px 4px var(--colorstandard);
  }
`;

export const ContainerInput = styled.div`
  position: relative;
  display: inline-block;

  input {
    width: 350px;
    height: 50px;
    border-radius: 40px;
    box-shadow: 0px 0px 2px var(--colorstandard);
    padding-left: 1.4rem;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;

    font-family: 'Quicksand';

    @media (max-width: 950px) {
      margin-bottom: 2rem;
    }
  }

  p {
    position: absolute;
    top: 70%;
    color: var(--colorError);
    font-size: 12px;
  }
`;
