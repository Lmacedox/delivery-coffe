import { Product } from '../../context/CardContext'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREMENT_PRODUCT_AMOUNT = 'INCREMENT_PRODUCT_AMOUNT',
  CHANGE_PRODUCT_AMOUNT = 'CHANGE_PRODUCT_AMOUNT',
}

export function addNewProductCart(newProduct: Product) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function removeProductCart(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  }
}

export function changeProductAmountCart(data: {
  productId: number
  typeAction: string
}) {
  return {
    type: ActionTypes.CHANGE_PRODUCT_AMOUNT,
    payload: {
      data,
    },
  }
}
