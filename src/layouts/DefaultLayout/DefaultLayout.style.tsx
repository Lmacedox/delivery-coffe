import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;

  max-width: 90rem;
  width: 100%;

  margin: 0 auto;
  padding: 2rem 0rem 9.81rem 0rem;

  background: ${(props) => props.theme.base.background};
`

export const LayoutContent = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 1.87rem;
`
