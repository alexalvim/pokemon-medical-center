import styled from 'styled-components'

export const ContentWrapper = styled.label`
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled.input<{ $hasError: boolean }>`
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.typo[200]};
  padding: ${({ theme }) => theme.spaces[200]};
  font-weight: 500;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }

  ${({ $hasError, theme }) =>
    $hasError ? `border-color: ${theme.colors.errorRed};` : null}
`

export const LabelText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkestGray};
  font-size: ${({ theme }) => theme.typo[100]};
  margin-bottom: ${({ theme }) => theme.spaces[100]};
`

export const ErrorMessage = styled.span`
  font-weight: 700;
  display: block;
  color: ${({ theme }) => theme.colors.errorRed};
  font-size: ${({ theme }) => theme.typo[100]};
  padding: ${({ theme }) => theme.spaces[100]};
`
