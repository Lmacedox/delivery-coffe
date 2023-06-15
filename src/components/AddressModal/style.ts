import styled from 'styled-components'
import Modal from 'react-modal'

export const ModalStyled = styled(Modal)`
  .content-search {
    gap: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 100%;
    }

    button {
      background: blue;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      height: 2.4rem;
      width: 2.62rem;

      &:hover {
        transition: 1;
        filter: brightness(0.5);
      }
    }
  }
`

export const ContentBodyModal = styled.div`
  background: white;

  border-radius: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 362px;
  width: 100%;
`
export const InputModal = styled.input`
  height: 2.62rem;
  padding: 0.75rem;
  outline: none;
  background: rgb(237, 237, 237);
  border: 1px solid rgb(230, 229, 229);
  border-radius: 4px;
`
