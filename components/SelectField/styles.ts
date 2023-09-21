import styled from 'styled-components'

export const ContentWrapper = styled.label`
  display: flex;
  flex-direction: column;
`

export const StyledSelect = styled.select`
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.typo[200]};
  padding: ${({ theme }) => theme.spaces[200]};
  font-weight: 500;
  appearance: none;
  width: 100%;
  cursor: pointer;
`

export const SelectWrapper = styled.div<{ $isOpened: boolean }>`
  position: relative;
  flex-grow: 1;

  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 16px;
    background-color: ${({ theme }) => theme.colors.darkGray};
    display: block;
    position: absolute;
    right: ${({ theme }) => theme.spaces[200]};
    top: 50%;
    z-index: 1;
    transition: all 0.3s;
  }

  &:before {
    transform: rotate(60deg);
    right: calc(${({ theme }) => theme.spaces[200]} + 8px);
  }

  &:after {
    transform: rotate(-60deg);
  }

  ${({ $isOpened }) =>
    $isOpened
      ? `
    &:before {
      transform: rotate(-60deg);
    }
  
    &:after {
      transform: rotate(60deg);
    }
  `
      : null}
`

export const LabelText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkestGray};
  font-size: ${({ theme }) => theme.typo[100]};
  margin-bottom: ${({ theme }) => theme.spaces[100]};
`
