import styled from 'styled-components'

export const ContentAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 0.5rem;

  width: 72px;
  height: 38px;

  background: ${(props) => props.theme.base['base-button']};
  border-radius: 6px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme.base.title};
  }
`

export const AmountButton = styled.button`
  display: flex;
  align-items: center;

  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.products.purple};
`
