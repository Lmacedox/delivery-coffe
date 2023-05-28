import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  gap: 7.06rem;

  margin-top: 5rem;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`

export const DeliveryInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2 {
    color: ${(props) => props.theme.products['yellow-dark']};
  }
`

interface CardBenefitsProps {
  cardColor?: string
}

export const ContentBenefits = styled.div`
  background: linear-gradient(90deg, rgb(219, 172, 44), rgb(128, 71, 248));
  border-radius: 6px 36px;

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 40px;

    margin: 1px 1px;
    border-radius: 6px 36px;
    background: white;
  }
`

export const CardBenefits = styled.div<CardBenefitsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  max-width: 355px;

  @media (max-width: 860px) {
    max-width: initial;
  }

  .text-bold {
    font-weight: bold;
  }

  .content-text {
    display: flex;
    flex-direction: column;
  }

  .icon-div {
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

export const ContentDeliveryBanner = styled.div`
  display: flex;
  align-items: end;

  img {
    width: 100%;
  }
`
