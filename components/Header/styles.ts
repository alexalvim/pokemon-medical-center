import Link from 'next/link'
import styled from 'styled-components'

export const ContentWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.lightestColor};
`

export const ContentHolder = styled.section`
  padding: ${({ theme }) => `${theme.spaces[200]}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1150px;
  margin: 0 auto;
`

export const HeaderLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkestColor};
  text-decoration: none;
  margin-right: ${({ theme }) => theme.spaces[300]};
  font-size: ${({ theme }) => theme.typo[200]};
`
