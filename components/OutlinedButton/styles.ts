import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightestColor};
  border: solid 1px ${({ theme }) => theme.colors.darkestGray};
  padding: ${({ theme }) => `${theme.spaces[100]} ${theme.spaces[200]}`};
  color: ${({ theme }) => theme.colors.darkestGray};
  font-weight: 700;
  font-size: ${({ theme }) => theme.typo[200]};
  border-radius: 30px;
  cursor: pointer;
`

export const RightLabel = styled.span`
  margin-left: ${({ theme }) => theme.spaces[100]};
  font-size: ${({ theme }) => theme.typo[500]};
`
