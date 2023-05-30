import { useEffect, useState } from 'react'

import { ContentBodyModal, ModalStyled } from './style'

export function AddressModal() {
  useEffect(() => {
    setShow(true)
  }, [])

  const [show, setShow] = useState(false)

  return (
    <ModalStyled
      isOpen={show}
      onRequestClose={() => setShow(false)}
      contentLabel="Example Modal"
    >
      <ContentBodyModal>
        <div>
          <h1>Aonde você está ?</h1>
          <span>Informe-nos seu endereço para agilizar o seu pedido!</span>
        </div>
        <div>
          <label htmlFor="zipCode;"></label>
          <input type="text" id="zipCode" />
        </div>
      </ContentBodyModal>
    </ModalStyled>
  )
}
