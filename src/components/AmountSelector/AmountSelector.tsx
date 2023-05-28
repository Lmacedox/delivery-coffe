import { Minus, Plus } from 'phosphor-react'
import { AmountButton, ContentAmount } from './AmountSelector.style'

interface AmountSelectorType {
  productAmount: number
  handleAddProductAmount: () => void
  handleDecrementProductAmount: () => void
}

export function AmountSelector({
  productAmount,
  handleAddProductAmount,
  handleDecrementProductAmount,
}: AmountSelectorType) {
  return (
    <ContentAmount>
      <AmountButton onClick={handleDecrementProductAmount}>
        <Minus />
      </AmountButton>
      <span>{productAmount}</span>
      <AmountButton onClick={handleAddProductAmount}>
        <Plus />
      </AmountButton>
    </ContentAmount>
  )
}
