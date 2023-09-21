import {
  ContentHolder,
  ContentWrapper,
  MapSeparator,
  MapText,
  Subtitle,
  Title,
} from './styles'

interface PageSumaryProps {
  title: string
  subtitle: string
}

export const PageSummary = ({ title, subtitle }: PageSumaryProps) => {
  return (
    <ContentWrapper>
      <ContentHolder>
        <MapText>
          Home
          <MapSeparator>{'>'}</MapSeparator>
          {title}
        </MapText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentHolder>
    </ContentWrapper>
  )
}
