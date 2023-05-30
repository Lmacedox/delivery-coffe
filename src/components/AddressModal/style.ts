import styled from 'styled-components'
import Modal from 'react-modal'

export const ModalStyled = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  /* position: absolute;
  inset: 40px;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px; */
`

export const ContentBodyModal = styled.div`
  background: #0b090ceb;
  color: white;
  border-radius: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`
