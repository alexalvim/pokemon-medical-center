import styled from 'styled-components'

export const ContentWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Message = styled.h1`
  font-size: ${({ theme }) => theme.typo[700]};
  color: ${({ theme }) => theme.colors.darkestColor};
  font-weight: 700;
`
