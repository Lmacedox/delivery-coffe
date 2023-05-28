import { ReactNode, createContext, useReducer, useState } from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addNewProductCart,
  removeProductCart,
  changeProductAmountCart,
} from '../reducers/cart/actions'

export interface Product {
  productId: number
  name: string
  thubnailUrl: string
  price: string
  totalPrice: string
  amount: number
}

export interface PaymentData {
  number: string
  zipCode: string
  street: string
  neighborhood: string
  city: string
  uf: string
  paymentType: string
  complement?: string | undefined
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

  const [paymentData, setPaymentData] = useState<PaymentData>()

  const totalProductInCart = products.length

  function addPaymentData(paymentFormData: PaymentData) {
    console.log('Dados de pagamento', paymentFormData)
    setPaymentData(paymentFormData)
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
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
