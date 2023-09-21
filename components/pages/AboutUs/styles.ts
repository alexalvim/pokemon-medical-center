import styled from 'styled-components'

export const TextWrapper = styled.section`
  max-width: 27.5rem;
  margin: 0 auto;
  padding: ${({ theme }) =>
    `${theme.spaces[500]} ${theme.spaces[200]} ${theme.spaces[900]}`};
`

export const TextTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-weight: 500;
  font-size: ${({ theme }) => theme.typo[500]};
  margin-bottom: ${({ theme }) => theme.spaces[300]};
`

export const TextSubtitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-weight: 400;
  font-size: ${({ theme }) => theme.typo[400]};
  margin-bottom: ${({ theme }) => theme.spaces[300]};
`

export const TextParagraph = styled.p`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-weight: 400;
  font-size: ${({ theme }) => theme.typo[300]};
  margin-bottom: ${({ theme }) => theme.spaces[300]};
  line-height: 1.4;
`
