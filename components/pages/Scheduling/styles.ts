import styled from 'styled-components'

export const ContentWrapper = styled.section`
  padding: ${({ theme }) => theme.spaces[200]};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const ContentHolder = styled.div``

export const ResponseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`
