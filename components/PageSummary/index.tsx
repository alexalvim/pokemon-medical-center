import {
  ContentHolder,
  ContentWrapper,
  MapSeparator,
  MapText,
  Subtitle,
  Title,
} from './styles'

interface PageSummaryProps {
  title: string
  subtitle: string
}

export const PageSummary = ({ title, subtitle }: PageSummaryProps) => {
  return (
    <ContentWrapper>
      <ContentHolder>
        <MapText>
          <span>Home</span>
          <MapSeparator>{'>'}</MapSeparator>
          {title}
        </MapText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentHolder>
    </ContentWrapper>
  )
}
