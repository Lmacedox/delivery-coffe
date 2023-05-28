import styled from 'styled-components'

interface InputStyledProps {
  error: boolean
}

export const InputStyled = styled.input<InputStyledProps>`
  height: 2.62rem;

  padding: 0.75rem;

  outline: none;

  background: ${(props) => props.theme.base['base-input']};

  border: 1px solid ${(props) => props.theme.base['base-button']};

  border-radius: 4px;

  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme.products['yellow-dark']};
  }
`
