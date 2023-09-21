import styled from 'styled-components'

export const ContentWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.mainColor};
`

export const ContentHolder = styled.div`
  padding: ${({ theme }) =>
    `${theme.spaces[400]} ${theme.spaces[200]} ${theme.spaces[200]}`};
  color: ${({ theme }) => theme.colors.lightestColor};
  max-width: 71.875rem;
  margin: 0 auto;
  height: 11.6875rem;
`

export const MapText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightestColor};
  font-size: ${({ theme }) => theme.typo[100]};
  margin-bottom: ${({ theme }) => theme.spaces[100]};
  display: inline-block;
`

export const MapSeparator = styled.span`
  margin: ${({ theme }) => `0 ${theme.spaces[50]}`};
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typo[700]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightestColor};
  line-height: 1.18;
  margin-bottom: ${({ theme }) => theme.spaces[100]};
`

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.typo[200]};
  color: ${({ theme }) => theme.colors.lightestColor};
`
