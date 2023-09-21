import { Button } from '../Button'
import { BoxText, BoxTitle, ContentWrapper, ImageWrapper } from './styles'
import Image from 'next/image'

interface NoticeBoxProps {
  title: string
  text: string
  imageSrc: string
  onButtonClick: () => void
  buttonLabel: string
}

export const NoticeBox = ({
  title,
  text,
  imageSrc,
  onButtonClick,
  buttonLabel,
}: NoticeBoxProps) => {
  return (
    <ContentWrapper>
      <BoxTitle>{title}</BoxTitle>
      <ImageWrapper>
        <Image width={42} height={42} src={imageSrc} alt={'Ícone do box'} />
      </ImageWrapper>
      <BoxText>{text}</BoxText>
      <Button label={buttonLabel} onClick={onButtonClick} />
    </ContentWrapper>
  )
}
