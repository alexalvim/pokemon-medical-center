import styled from 'styled-components'

export const ContentWrapper = styled.section`
  border: solid 1px ${({ theme }) => theme.colors.dangerRed};
  padding: ${({ theme }) => `${theme.spaces[300]}`};
  background-color: ${({ theme }) => theme.colors.dangerRed}0B;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 26rem;
  width: 100%;
`

export const BoxTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkestGray};
  font-size: ${({ theme }) => theme.typo[500]};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spaces[200]};
  text-align: center;
`

export const BoxText = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.typo[200]};
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.spaces[200]};
  text-align: center;
`

export const ImageWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces[200]};
`
