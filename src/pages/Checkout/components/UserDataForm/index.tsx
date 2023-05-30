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

import { FeildForm } from '../Fields'
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
          <div className="cep">
            <FeildForm id="cep" placeholder="CEP" maxLength={8} />
          </div>

          <div className="logradouro">
            <FeildForm id="logradouro" placeholder="Rua" />
          </div>

          <div className="numero">
            <FeildForm id="numero" placeholder="Número" />
          </div>

          <div className="complemento">
            <FeildForm id="complemento" placeholder="Complemento" />

            <span className="optional">Opcional</span>
          </div>

          <div className="bairro">
            <FeildForm id="bairro" placeholder="Bairro" />
          </div>

          <div className="localidade">
            <FeildForm id="localidade" placeholder="localidade" />
          </div>

          <div className="uf">
            <FeildForm id="uf" placeholder="UF" />
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
