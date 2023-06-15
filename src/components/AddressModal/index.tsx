import { useContext, useState } from 'react'

import { MagnifyingGlass } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { ContentBodyModal, InputModal, ModalStyled } from './style'

import { CartContext } from '../../context/CardContext'

export function AddressModal() {
  const { handleSearchCEP, paymentData } = useContext(CartContext)

  const [cep, setCep] = useState('')

  return (
    <ModalStyled
      isOpen={!paymentData?.cep}
      onRequestClose={() => !paymentData?.cep}
      contentLabel="Example Modal"
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      <ContentBodyModal>
        <div>
          <h1 className={defaultTheme.classes['title-L']}>Aonde você está ?</h1>
          <span className={defaultTheme.classes['title-XS']}>
            Informe-nos seu CEP para agilizar o seu pedido!
          </span>
        </div>
        <div className="content-search">
          <InputModal
            maxLength={8}
            type="text"
            id="zipCode"
            placeholder="Insira seu CEP"
            value={cep}
            onChange={(change) => setCep(change.target.value)}
          />
          <button onClick={() => handleSearchCEP(cep)}>
            <MagnifyingGlass size={28} color="white" weight="fill" />
          </button>
        </div>
      </ContentBodyModal>
    </ModalStyled>
  )
}
