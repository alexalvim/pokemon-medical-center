import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: ${({ theme }) => `${theme.spaces[200]} ${theme.spaces[300]}`};
  border: none;
  color: ${({ theme }) => theme.colors.lightestColor};
  font-weight: 700;
  font-size: ${({ theme }) => theme.typo[200]};
  border-radius: 30px;
  cursor: pointer;
`
