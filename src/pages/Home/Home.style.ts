import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const WrapperIntroduction = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 34rem;
  height: 100%;
  padding-top: 5.87rem;
  padding-bottom: 7.06rem;

  img {
    max-width: 420px;
    width: 100%;
    max-height: 320px;
  }

  @media (max-width: 968px) {
    justify-content: center;
    flex-wrap: wrap-reverse;

    gap: 1rem;
  }
`

export const ContentTexts = styled.div`
  max-width: 36.75rem;
  width: 100%;
  gap: 71px;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 16px;
  }
`

export const Benefits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  row-gap: 1.56rem;

  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    .shopping {
      justify-content: right;
    }
    .package {
      justify-content: left;
    }
    .delivery {
      justify-content: right;
    }
    .quality {
      justify-content: left;
    }
  }
`

interface CardBenefitsProps {
  cardColor?: string
}

export const CardBenefits = styled.div<CardBenefitsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;

    width: 2rem;
    height: 2rem;
    border-radius: 100px;
    background: ${(props) => props.cardColor};
  }
`
export const OurCoffes = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3.37rem;
`

export const ContainerCards = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  row-gap: 45px;
  column-gap: 32px;
`
