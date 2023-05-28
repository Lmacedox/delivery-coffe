import { MapPin, CurrencyDollar, IconProps, Timer } from 'phosphor-react'
import DeliverySuccessSvg from '../../assets/sucess-image.svg'
import { defaultTheme } from '../../styles/themes/default'
import {
  CardBenefits,
  ContentBenefits,
  ContentDeliveryBanner,
  DeliveryInformations,
  SuccessContainer,
} from './Success.style'
import { CartContext } from '../../context/CardContext'
import { useContext, useMemo } from 'react'

export function Sucess() {
  const svgBenefitsProps: IconProps = {
    weight: 'fill',
    width: 17,
    height: 20,
    color: defaultTheme.base.white,
  }

  const { paymentData } = useContext(CartContext)

  const addressDelivery = useMemo(
    () => (
      <span className={defaultTheme.classes['text-regular-M']}>
        Entrega em{' '}
        <b>
          {paymentData?.street}, {paymentData?.number}
        </b>{' '}
        {paymentData?.neighborhood} - {paymentData?.city},{paymentData?.uf}
      </span>
    ),
    [
      paymentData?.city,
      paymentData?.neighborhood,
      paymentData?.number,
      paymentData?.street,
      paymentData?.uf,
    ],
  )

  return (
    <SuccessContainer>
      <DeliveryInformations>
        <div>
          <h2 className={defaultTheme.classes['title-L']}>
            Uhu! Pedido confirmado!
          </h2>
          <span className={defaultTheme.classes['text-regular-L']}>
            Agora é só aguardar que logo o café chegará até você
          </span>
        </div>

        <ContentBenefits>
          <section>
            <CardBenefits cardColor="#8047F8">
              <div className="icon-div">
                <MapPin {...svgBenefitsProps} />
              </div>
              <div className="content-text">{addressDelivery}</div>
            </CardBenefits>

            <CardBenefits cardColor="#DBAC2C">
              <div className="icon-div">
                <Timer {...svgBenefitsProps} />
              </div>
              <div className="content-text">
                <span className={defaultTheme.classes['text-regular-M']}>
                  Previsão de entrega
                </span>
                <span
                  className={`${defaultTheme.classes['text-regular-M']} text-bold`}
                >
                  20 min - 30 min
                </span>
              </div>
            </CardBenefits>

            <CardBenefits cardColor="#C47F17">
              <div className="icon-div">
                <CurrencyDollar {...svgBenefitsProps} />
              </div>
              <div className="content-text">
                <span className={defaultTheme.classes['text-regular-M']}>
                  Pagamento na entrega
                </span>
                <span
                  className={`${defaultTheme.classes['text-regular-M']} text-bold`}
                >
                  Cartão de Crédito
                </span>
              </div>
            </CardBenefits>
          </section>
        </ContentBenefits>
      </DeliveryInformations>

      <ContentDeliveryBanner>
        <img src={DeliverySuccessSvg} alt="Homem sobre uma motocicleta" />
      </ContentDeliveryBanner>
    </SuccessContainer>
  )
}
