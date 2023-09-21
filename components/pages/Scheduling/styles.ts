import styled from 'styled-components'

export const ContentWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const ContentHolder = styled.div`
  padding: ${({ theme }) => theme.spaces[200]};
  flex-grow: 1;
  display: flex;
`

export const ResponseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const FormWrapper = styled.div`
  max-width: 34.25rem;
  width: 100%;
  margin: 0 auto;
`
