import { ReactNode, createContext, useReducer, useState } from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addNewProductCart,
  removeProductCart,
  changeProductAmountCart,
} from '../reducers/cart/actions'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { produce } from 'immer'

export interface Product {
  productId: number
  name: string
  thubnailUrl: string
  price: string
  totalPrice: string
  amount: number
}

export interface PaymentData {
  numero: string
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
  paymentType: string
  complemento?: string | undefined
}

interface CartContextType {
  products: Product[]
  paymentData: PaymentData | undefined
  totalProductInCart: number
  addProductToCart: (product: Product) => void
  removeProductToCart: (productId: number) => void
  changeProductAmount: (data: {
    productId: number
    typeAction: 'increment' | 'decrement'
  }) => void
  addPaymentData: (addPaymentData: PaymentData) => void
  handleSearchCEP(cep: string): Promise<void>
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CardContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
  })
  const { products } = cartState

  const [paymentData, setPaymentData] = useState<PaymentData>(() => {
    const storagePaymentDataAsJSON = localStorage.getItem('@payment-data:1.0.0')

    if (storagePaymentDataAsJSON) {
      return JSON.parse(storagePaymentDataAsJSON)
    }

    return {
      cep: '',
      bairro: '',
      localidade: '',
      uf: '',
      logradouro: '',
    }
  })

  const totalProductInCart = products.length

  function addPaymentData(paymentFormData: PaymentData) {
    setPaymentData(paymentFormData)

    const paymentDataJSON = JSON.stringify(paymentFormData)
    localStorage.setItem('@payment-data:1.0.0', paymentDataJSON)
  }

  function addProductToCart(product: Product) {
    dispatch(addNewProductCart(product))
  }

  function removeProductToCart(productId: number) {
    dispatch(removeProductCart(productId))
  }

  function changeProductAmount(data: {
    productId: number
    typeAction: 'increment' | 'decrement'
  }) {
    dispatch(changeProductAmountCart({ ...data }))
  }

  async function handleSearchCEP(cep: string) {
    const getAdress = api.get(`/${cep}/json`).then(({ data }) => {
      console.log(data)
      if (data.erro !== undefined) {
        throw new Error()
      }

      const paymentAddress = produce(paymentData, (draft) => {
        draft.cep = data.cep
        draft.bairro = data.bairro
        draft.localidade = data.localidade
        draft.logradouro = data.logradouro
        draft.uf = data.uf
      })

      setPaymentData(paymentAddress)
    })

    toast.promise(getAdress, {
      success: 'CEP encontrado!',
      pending: 'Buscando CEP',
      error: 'Ocorreu um erro buscar o CEP, tente novamente mais tarde.',
    })
  }

  return (
    <CartContext.Provider
      value={{
        products,
        totalProductInCart,
        paymentData,
        addProductToCart,
        removeProductToCart,
        changeProductAmount,
        addPaymentData,
        handleSearchCEP,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
