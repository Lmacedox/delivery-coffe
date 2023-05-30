import styled from 'styled-components'

export const UserDataFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;

  width: 100%;

  gap: 0.93rem;
`

export const ContentDeliveryFormInformation = styled.div`
  display: flex;
  gap: 0.68rem;

  div {
    display: grid;
    gap: 0.12rem;
  }
`

export const ContentFields = styled.div`
  display: grid;
  grid-template-columns: repeat(12.5rem 17.25rem 3.75rem);
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem 0.75rem;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
  }

  .cep {
    grid-area: 1;
  }

  .logradouro {
    grid-area: 2 / 1 / auto / 4;
  }

  .numero {
    grid-area: 3 / 1 / auto / 2;
  }

  .complemento {
    grid-area: 3 / 2 / auto / 4;
    position: relative;
  }

  .bairro {
    grid-area: 4 / 1 / auto / 1;
  }

  .localidade {
    grid-area: 4 / 2 / auto / 2;
  }

  .uf {
    grid-area: 4 / 3 / auto / 4;
  }

  .optional {
    position: absolute;
    right: 0.75rem;
    top: 0.81rem;

    font-family: 'Roboto';
    color: ${(props) => props.theme.base['base-label']};
    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
  }
`

export const FormSection = styled.div`
  display: grid;
  gap: 2rem;

  background: ${(props) => props.theme.base['base-card']};
  border-radius: 6px;

  padding: 2.65rem;
`

export const ContentPaymentOptions = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 0.75rem;
    margin-bottom: 10px;
  }

  input {
    display: none;
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme.products['purple-light']};
    border: 1px solid ${(props) => props.theme.products.purple};
  }

  label {
    transition: 0.5s;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 11rem;
    height: 3.18rem;

    gap: 0.75rem;

    position: relative;

    background: #e6e5e5;
    border-radius: 6px;

    white-space: nowrap;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    text-transform: uppercase;
    color: #574f4d;

    &:hover {
      background: #d7d5d5;
    }

    @media (max-width: 988px) {
      width: 100%;
    }
  }
`
