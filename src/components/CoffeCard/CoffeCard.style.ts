import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin: 0 auto;

  width: 16rem;
  height: 19.37rem;

  padding: 20px;

  background: ${(props) => props.theme.base['base-card']};
  border-radius: 6px 36px;
`

export const Categories = styled.div`
  display: flex;
  gap: 4px;

  span {
    width: 100%;

    text-align: center;
    padding: 4px 8px 2px 8px;

    background: ${(props) => props.theme.products['yellow-light']};
    border-radius: 100px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.62rem;
    line-height: 130%;

    white-space: nowrap;
    text-transform: uppercase;

    color: ${(props) => props.theme.products['yellow-dark']};
  }
`

export const ProductImageContainer = styled.div`
  position: relative;
  width: 7.5rem;
  height: 5.37rem;

  img {
    display: flex;
    position: absolute;
    bottom: 10px;
  }
`

export const ProductInformations = styled.div`
  display: grid;
  gap: 8px;

  margin: 1rem auto 2.06rem;
`

export const PriceAndProductAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 1.43rem;
`

export const ProductAmountController = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Price = styled.div`
  .price-simbol {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.87rem;
    line-height: 130%;

    margin-right: 0.2rem;

    color: ${(props) => props.theme.base.text};
  }

  .value {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme.base.text};
  }
`

export const AddCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2.37rem;
  height: 2.37rem;

  cursor: pointer;

  background: ${(props) => props.theme.products['purple-dark']};
  border-radius: 6px;

  color: ${(props) => props.theme.base['base-card']};

  &:hover {
    background: ${(props) => props.theme.products.purple};
  }
`
