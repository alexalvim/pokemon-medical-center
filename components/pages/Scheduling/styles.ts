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
  flex-direction: column;
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

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkestGray};
  font-size: ${({ theme }) => theme.typo[600]};
  font-weight: 600;
  padding: ${({ theme }) =>
    `${theme.spaces[200]} ${theme.spaces[200]} ${theme.spaces[400]}`};
  text-align: center;
`

export const Row = styled.div`
  > * {
    margin-bottom: ${({ theme }) => theme.spaces[500]};
  }

  @media (min-width: 48rem) {
    display: flex;

    > * {
      flex: 1;
      margin-right: ${({ theme }) => theme.spaces[300]};

      &:last-child {
        margin-right: 0;
      }
    }
  }
`

export const TeamRegister = styled.div`
  margin-top: ${({ theme }) => theme.spaces[700]};
  margin-bottom: ${({ theme }) => theme.spaces[400]};
`

export const TeamRegisterHighlightedText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkestGray};
  font-size: ${({ theme }) => theme.typo[100]};
  display: block;
  margin-bottom: ${({ theme }) => theme.spaces[100]};
`

export const TeamRegisterText = styled.span`
  font-size: ${({ theme }) => theme.typo[100]};
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spaces[200]};
`

export const TeamRegisterFields = styled.div`
  > * {
    margin-bottom: ${({ theme }) => theme.spaces[500]};
  }
`

export const SubmitHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => `${theme.spaces[600]} 0 ${theme.spaces[900]}`};
`
