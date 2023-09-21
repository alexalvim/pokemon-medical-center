import styled from 'styled-components'

export const Button = styled.button<{ $isExpanded: boolean }>`
  background-color: ${({ theme }) => theme.colors.mainColor};
  border: none;
  color: ${({ theme }) => theme.colors.lightestColor};
  padding: ${({ theme }) => `${theme.spaces[100]} ${theme.spaces[150]}`};
  display: flex;
  align-items: center;
  border-radius: 30.5px;
  cursor: pointer;
  transition: all 0.5s;
  width: 61px;
  height: 61px;
  overflow: hidden;

  &:hover {
    width: 254px;
  }

  ${({ $isExpanded }) => ($isExpanded ? `width: 254px;` : null)}
`

export const ButtonLabel = styled.span`
  font-size: ${({ theme }) => theme.typo[500]};
  font-weight: 600;
  margin: 0 ${({ theme }) => theme.spaces[200]};
  white-space: nowrap;
`
