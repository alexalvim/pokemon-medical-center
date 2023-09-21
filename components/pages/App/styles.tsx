import styled from 'styled-components'

export const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const MainSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  > * {
    flex-grow: 1;
  }
`
