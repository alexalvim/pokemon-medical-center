import { Button } from '../Button'
import { PokeballButton } from '../PokeballButton'
import { ContentHolder, ContentWrapper, HeaderLink } from './styles'

export const Header = () => {
  return (
    <ContentWrapper>
      <ContentHolder>
        <PokeballButton />
        <div>
          <HeaderLink href={'/'}>Quem somos</HeaderLink>
          <Button
            onClick={() => {
              console.log('clicked')
            }}
            label={'Agendar consulta'}
          />
        </div>
      </ContentHolder>
    </ContentWrapper>
  )
}
