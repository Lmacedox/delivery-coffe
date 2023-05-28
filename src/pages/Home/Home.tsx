import { Coffee, IconProps, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeHomeImage from '../../assets/coffe-home-image.svg'
import {
  Benefits,
  CardBenefits,
  ContainerCards,
  ContentTexts,
  HomeContainer,
  OurCoffes,
  WrapperIntroduction,
} from './Home.style'

import dataJSON from '../../../data.json'
import { CoffeCard } from '../../components'
import { defaultTheme } from '../../styles/themes/default'

export function Home() {
  const svgBenefitsProps: IconProps = {
    weight: 'fill',
    width: 17,
    height: 20,
    color: defaultTheme.base.white,
  }

  return (
    <HomeContainer>
      <WrapperIntroduction>
        <ContentTexts>
          <div>
            <h1 className={defaultTheme.classes['title-XL']}>
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className={defaultTheme.classes['text-regular-L']}>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <Benefits>
            <CardBenefits className="shopping" cardColor="#C47F17">
              <div>
                <ShoppingCart {...svgBenefitsProps} />
              </div>
              <span className={defaultTheme.classes['text-regular-M']}>
                Compra simples e segura
              </span>
            </CardBenefits>

            <CardBenefits className="package" cardColor="#574F4D">
              <div>
                <Package {...svgBenefitsProps} />
              </div>
              <span className={defaultTheme.classes['text-regular-M']}>
                Embalagem mantém o café intacto
              </span>
            </CardBenefits>

            <CardBenefits className="delivery" cardColor="#DBAC2C">
              <div>
                <Timer {...svgBenefitsProps} />
              </div>
              <span className={defaultTheme.classes['text-regular-M']}>
                Entrega rápida e rastreada
              </span>
            </CardBenefits>

            <CardBenefits className="quality" cardColor="#8047F8">
              <div>
                <Coffee {...svgBenefitsProps} />
              </div>
              <span className={defaultTheme.classes['text-regular-M']}>
                O café chega fresquinho até você
              </span>
            </CardBenefits>
          </Benefits>
        </ContentTexts>

        <img
          src={CoffeHomeImage}
          alt="Copo de café ao lado de grãos moidos e inteiros"
        />
      </WrapperIntroduction>

      <OurCoffes>
        <h2 className={defaultTheme.classes['title-L']}>Nossos Cafés</h2>

        <ContainerCards>
          {dataJSON.products.map((product) => (
            <CoffeCard key={product.id.toString()} {...product} />
          ))}
        </ContainerCards>
      </OurCoffes>
    </HomeContainer>
  )
}
