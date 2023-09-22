import styled from 'styled-components'

export const ContentWrapper = styled.label<{ $isHorizontal: boolean }>`
  display: flex;
  flex-direction: column;

  input {
    display: none;
  }

  ${({ $isHorizontal, theme }) =>
    $isHorizontal
      ? `
      flex-direction: row;
      align-items: center;

      > *:first-child {
        margin-right: ${theme.spaces[400]};
      }
    `
      : null}
`

export const StyledSelect = styled.div`
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.typo[200]};
  padding: ${({ theme }) => theme.spaces[200]};
  font-weight: 500;
  appearance: none;
  width: 100%;
  cursor: pointer;
  min-height: 3rem;
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
    top: 1.5rem;
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

export const OptionsList = styled.ul`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.lightestColor};
  font-size: ${({ theme }) => theme.typo[200]};
  cursor: pointer;
  position: absolute;
  width: 100%;
  transform: translateY(-0.5rem);
  max-height: 50vh;
  overflow: auto;
  box-shadow: 0 4px 4px 0 ${({ theme }) => theme.colors.darkestColor}13;

  > li {
    padding: ${({ theme }) => theme.spaces[200]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGray}10;
    }
  }

  @media (min-height: 600px) {
    max-height: 300px;
  }
`
