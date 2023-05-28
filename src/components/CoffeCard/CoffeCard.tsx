import { ShoppingCart, Trash } from 'phosphor-react'
import {
  AddCartButton,
  CardContainer,
  Categories,
  Price,
  PriceAndProductAmount,
  ProductAmountController,
  ProductImageContainer,
  ProductInformations,
} from './CoffeCard.style'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CardContext'
import { coffeeCategories } from '../../../data.json'
import { AmountSelector } from '..'
import { defaultTheme } from '../../styles/themes/default'

interface ICategoryCoffeType {
  id: number
  categoryId: number
}

interface ICoffeCardProps {
  id: number
  name: string
  description: string
  price: string
  thubnailUrl: string
  categories: ICategoryCoffeType[]
}

export function CoffeCard({
  id,
  name,
  description,
  price,
  thubnailUrl,
  categories,
}: ICoffeCardProps) {
  const { addProductToCart, removeProductToCart, products } =
    useContext(CartContext)

  const productInCart = products.find((product) => product.productId === id)

  const [productAmount, setProductAmount] = useState(
    (productInCart && productInCart.amount) || 1,
  )

  function handleDecrementProductAmount() {
    setProductAmount((state) => state - 1)
  }

  function handleAddProductAmount() {
    setProductAmount((state) => state + 1)
  }

  const productValue = (
    Number(parseFloat(price.replace(',', '.'))) * productAmount
  ).toFixed(2)

  function handleAddProductToCart() {
    addProductToCart({
      productId: id,
      amount: productAmount,
      thubnailUrl,
      price,
      name,
      totalPrice: productValue,
    })
  }

  function handleRemoveProductToCart() {
    setProductAmount(1)
    removeProductToCart(id)
  }

  return (
    <CardContainer>
      <ProductImageContainer>
        <img src={thubnailUrl} alt={name} />
      </ProductImageContainer>

      <Categories>
        {categories.map((coffeCategory) => (
          <span key={coffeCategory.id}>
            {
              coffeeCategories.find(
                (itemCategory) => itemCategory.id === coffeCategory.categoryId,
              )?.name
            }
          </span>
        ))}
      </Categories>

      <ProductInformations>
        <h4 className={defaultTheme.classes['title-S']}>{name}</h4>
        <p className={defaultTheme.classes['text-regular-S']}>{description}</p>
      </ProductInformations>

      <PriceAndProductAmount>
        <Price>
          <span className="price-simbol">R$</span>
          <span className="value">{productValue}</span>
        </Price>

        <ProductAmountController>
          <AmountSelector
            productAmount={productAmount}
            handleAddProductAmount={handleAddProductAmount}
            handleDecrementProductAmount={handleDecrementProductAmount}
          />

          {productInCart ? (
            <AddCartButton onClick={handleRemoveProductToCart}>
              <Trash weight="fill" width={'100%'} height={'100%'} />
            </AddCartButton>
          ) : (
            <AddCartButton onClick={handleAddProductToCart}>
              <ShoppingCart weight="fill" width={'100%'} height={'100%'} />
            </AddCartButton>
          )}
        </ProductAmountController>
      </PriceAndProductAmount>
    </CardContainer>
  )
}
