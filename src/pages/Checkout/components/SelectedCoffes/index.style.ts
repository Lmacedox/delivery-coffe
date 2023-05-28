import styled from 'styled-components'

export const SelectedCoffesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 448px;
  width: 100%;

  @media (max-width: 930px) {
    max-width: 40rem;
  }
`

export const ContentProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  gap: 24px;

  min-height: 498px;

  background: ${(props) => props.theme.base['base-card']};
  border-radius: 6px 44px;
`

export const Cart = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme.base['base-button']};

  .content-image {
    img {
      width: 64px;
      height: 64px;
    }
  }
`

export const ContainerAmount = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`

export const ContentSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-top: 18px;
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;

  width: 72px;
  height: 38px;

  width: 91px;
  height: 38px;

  background: #e6e5e5;
  border-radius: 6px;

  margin: none;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    color: ${(props) => props.theme.base.text};
  }
`

export const ContentValues = styled.div`
  display: grid;
  gap: 12px;
`

export const BaseValueItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ItensValue = styled(BaseValueItem)``

export const ValuesAndConfirmation = styled.div`
  display: grid;
  gap: 24px;

  button {
    padding: 12px 8px;

    width: 100%;
    height: 46px;

    background: ${(props) => props.theme.products.yellow};
    border-radius: 6px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;

    text-transform: uppercase;

    color: #ffffff;
    font-stretch: 100;

    &:hover {
      background: ${(props) => props.theme.products['yellow-dark']};
    }
  }
`
