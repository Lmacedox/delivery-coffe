import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  UserDataFormContainer,
  ContentFields,
  ContentDeliveryFormInformation,
  FormSection,
  ContentPaymentOptions,
} from './style'

import { FeildsForm } from '../Fields'
import { useFormContext } from 'react-hook-form'

export function UserDataForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <UserDataFormContainer>
      <h4 className={defaultTheme.classes['title-XS']}>Complete seu pedido</h4>

      <FormSection>
        <ContentDeliveryFormInformation>
          <MapPinLine size={22} color={defaultTheme.products['yellow-dark']} />
          <div>
            <h5 className={defaultTheme.classes['text-regular-M']}>
              Endereço de Entrega
            </h5>
            <span className={defaultTheme.classes['text-regular-S']}>
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </ContentDeliveryFormInformation>

        <ContentFields>
          <div className="zipcode">
            <FeildsForm id="zipCode" placeholder="CEP" />
          </div>

          <div className="street">
            <FeildsForm id="street" placeholder="Rua" />
          </div>

          <div className="number">
            <FeildsForm id="number" placeholder="Número" />
          </div>

          <div className="complement">
            <FeildsForm id="complement" placeholder="Complemento" />

            <span className="optional">Opcional</span>
          </div>

          <div className="neighborhood">
            <FeildsForm id="neighborhood" placeholder="Bairro" />
          </div>

          <div className="city">
            <FeildsForm id="city" placeholder="Cidade" />
          </div>

          <div className="uf">
            <FeildsForm id="uf" placeholder="UF" />
          </div>
        </ContentFields>
      </FormSection>

      <FormSection>
        <ContentDeliveryFormInformation>
          <CurrencyDollar size={22} color={defaultTheme.products.purple} />
          <div>
            <h5 className={defaultTheme.classes['text-regular-M']}>
              Pagamento
            </h5>
            <span className={defaultTheme.classes['text-regular-S']}>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar.
            </span>
          </div>
        </ContentDeliveryFormInformation>

        <ContentPaymentOptions>
          <div>
            <input
              type="radio"
              onClick={() => console.log('Crédito')}
              id="credit-card"
              {...register('paymentType')}
              value="credit"
            />

            <label htmlFor="credit-card">
              <CreditCard size={22} color={defaultTheme.products.purple} />{' '}
              Cartão de crédito
            </label>

            <input
              type="radio"
              {...register('paymentType')}
              onClick={() => console.log('Débito')}
              id="debt-card"
              value="debt-card"
            />

            <label htmlFor="debt-card">
              <Bank size={22} color={defaultTheme.products.purple} />
              Cartão de débito
            </label>

            <input
              type="radio"
              {...register('paymentType')}
              onClick={() => console.log('Dinheiro')}
              id="money"
              value="money"
            />

            <label htmlFor="money">
              <Money size={22} color={defaultTheme.products.purple} /> Dinheiro
            </label>
          </div>
          {errors?.paymentType?.message && (
            <span className={defaultTheme.classes['text-required']}>
              * {errors?.paymentType.message.toString()}
            </span>
          )}
        </ContentPaymentOptions>
      </FormSection>
    </UserDataFormContainer>
  )
}
