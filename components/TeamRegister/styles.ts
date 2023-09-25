import styled from 'styled-components'

export const ContentWrapper = styled.div`
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
