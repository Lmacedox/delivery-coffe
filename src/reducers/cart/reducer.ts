import { produce } from 'immer'
import { Product } from '../../context/CardContext'
import { ActionTypes } from './actions'

interface CartState {
  products: Product[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        draft.products.push(action.payload.newProduct)
      })

    case ActionTypes.REMOVE_PRODUCT: {
      const newCart = state.products.filter(
        (product) => product.productId !== action.payload.productId,
      )

      if (!newCart) {
        return state
      }

      return produce(state, (draft) => {
        draft.products = newCart
      })
    }

    case ActionTypes.CHANGE_PRODUCT_AMOUNT: {
      const productIndex = state.products.findIndex(
        (product) => product.productId === action.payload.data.productId,
      )

      if (productIndex === -1) {
        return state
      }
      const currentProduct = state.products[productIndex]

      return produce(state, (draft) => {
        action.payload.data.typeAction === 'increment'
          ? (draft.products[productIndex].amount += 1)
          : (draft.products[productIndex].amount -= 1)

        const productValue = (
          Number(parseFloat(currentProduct.price.replace(',', '.'))) *
          draft.products[productIndex].amount
        ).toFixed(2)

        draft.products[productIndex].totalPrice = productValue
      })
    }

    default:
      return state
  }
}
