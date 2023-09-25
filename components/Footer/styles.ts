import styled from 'styled-components'

export const ContentWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.darkestGray};
  min-height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces[200]};
`

export const FooterText = styled.span`
  color: ${({ theme }) => theme.colors.lightestColor};
  font-size: ${({ theme }) => theme.typo[200]};
  text-align: center;
`
