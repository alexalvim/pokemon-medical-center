import styled from 'styled-components'
import bannerImage from '../../../public/images/pokemon-hero.jpg'

export const MainBanner = styled.div`
  background-image: url(${bannerImage.src});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BannerText = styled.h2`
  color: ${({ theme }) => theme.colors.lightestColor};
  max-width: 526px;
  text-align: center;
  font-size: ${({ theme }) => theme.typo[700]};
  padding: ${({ theme }) => theme.spaces[100]};
  line-height: 1.2;
`
