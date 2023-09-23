import { useRouter } from 'next/navigation'
import { Button } from '../Button'
import { PokeballButton } from '../PokeballButton'
import { ContentHolder, ContentWrapper, HeaderLink } from './styles'

export const Header = () => {
  const router = useRouter()

  return (
    <ContentWrapper>
      <ContentHolder>
        <PokeballButton />
        <div>
          <HeaderLink href={'/about-us'}>Quem somos</HeaderLink>
          <Button
            onClick={() => {
              router.push('/scheduling')
            }}
            label={'Agendar consulta'}
          />
        </div>
      </ContentHolder>
    </ContentWrapper>
  )
}
