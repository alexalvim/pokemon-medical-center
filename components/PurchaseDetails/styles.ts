import styled from 'styled-components'

export const ContentWrapper = styled.section`
  border-top: solid 1px ${({ theme }) => theme.colors.lightGray};
  padding-top: ${({ theme }) => theme.spaces[500]};
`

export const Row = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typo[200]};
  margin-bottom: ${({ theme }) => theme.spaces[100]};
`

export const InfoMessage = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.typo[50]};
`
