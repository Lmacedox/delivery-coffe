import { useContext } from 'react'
import { CartContext } from '../../../../context/CardContext'
import {
  Cart,
  ContainerAmount,
  ContentProducts,
  ContentSelector,
  ContentValues,
  ItensValue,
  RemoveButton,
  SelectedCoffesContainer,
  ValuesAndConfirmation,
} from './index.style'
import { AmountSelector } from '../../../../components'
import { Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'

export function SelectedCoffes() {
  const { products, removeProductToCart, changeProductAmount } =
    useContext(CartContext)

  const totalValueInProducts = products.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.totalPrice)
  }, 0)

  const deliveryFee = 3.7
  const subTotal = (deliveryFee + totalValueInProducts)
    .toFixed(2)
    .replace('.', ',')

  return (
    <SelectedCoffesContainer>
      <h4 className={defaultTheme.classes['title-XS']}>Cafés selecionados</h4>

      <ContentProducts>
        <div>
          {products.map((product) => (
            <Cart key={product.productId}>
              <ContainerAmount>
                <div className="content-image">
                  <img src={product.thubnailUrl} alt="Coffe" />
                </div>

                <div>
                  <div className={defaultTheme.classes['text-regular-M']}>
                    {product.name}
                  </div>

                  <ContentSelector>
                    <AmountSelector
                      productAmount={product.amount}
                      handleAddProductAmount={() =>
                        changeProductAmount({
                          productId: product.productId,
                          typeAction: 'increment',
                        })
                      }
                      handleDecrementProductAmount={() =>
                        changeProductAmount({
                          productId: product.productId,
                          typeAction: 'decrement',
                        })
                      }
                    />
                    <RemoveButton
                      onClick={() => removeProductToCart(product.productId)}
                    >
                      <Trash
                        width={50}
                        height={50}
                        color={defaultTheme.products.purple}
                      />
                      <span>REMOVER</span>
                    </RemoveButton>
                  </ContentSelector>
                </div>
              </ContainerAmount>
              <div className={defaultTheme.classes['text-bold-M']}>
                R$ {product.totalPrice.replace('.', ',')}
              </div>
            </Cart>
          ))}
        </div>

        <ValuesAndConfirmation>
          <ContentValues>
            <ItensValue>
              <span className={defaultTheme.classes['text-regular-S']}>
                Total de itens
              </span>
              <span className={defaultTheme.classes['text-regular-M']}>
                R$ {totalValueInProducts.toFixed(2).replace('.', ',')}
              </span>
            </ItensValue>
            <ItensValue>
              <span className={defaultTheme.classes['text-regular-S']}>
                Entrega
              </span>
              <span className={defaultTheme.classes['text-regular-M']}>
                R$ 3,70
              </span>
            </ItensValue>
            <ItensValue>
              <span className={defaultTheme.classes['text-bold-L']}>Total</span>
              <span className={defaultTheme.classes['text-bold-L']}>
                R$ {subTotal}
              </span>
            </ItensValue>
          </ContentValues>

          <button type="submit">Confirmar Pedido</button>
        </ValuesAndConfirmation>
      </ContentProducts>
    </SelectedCoffesContainer>
  )
}
