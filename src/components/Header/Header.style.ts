import styled from 'styled-components'

export const HeaderContainer = styled.header`
  nav {
    display: flex;
    justify-content: space-between;

    img {
      width: 5.3rem;
      height: 2.5rem;
    }
  }
`

export const WrapperAddressAndCart = styled.header`
  display: flex;
  gap: 0.75rem;
`

export const Address = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.46rem;
  padding: 0.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme.products['purple-light']};

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    color: ${(props) => props.theme.products['purple-dark']};
  }

  svg {
    color: ${(props) => props.theme.products.purple};
  }
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.7rem;
  height: 2.7rem;

  position: relative;

  border-radius: 6px;
  background: ${(props) => props.theme.products['yellow-light']};

  &:hover {
    transition: 0.5s;
    filter: brightness(0.9);
  }

  svg {
    color: ${(props) => props.theme.products['yellow-dark']};
  }
`

export const AmountToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 30px;
  left: 32px;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  background: ${(props) => props.theme.products['yellow-dark']};

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;

    text-align: center;

    color: #ffffff;
  }
`
