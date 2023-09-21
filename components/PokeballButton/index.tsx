import { Button, ButtonLabel } from './styles'
import whitePokeball from '../../public/images/white-pokeball.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const PokeballButton = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExpanded(false)
    }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Button $isExpanded={isExpanded}>
      <Image
        width={37}
        height={34}
        src={whitePokeball.src}
        alt={'Ícone de pokebola'}
      />
      <ButtonLabel>Centro Pokémon</ButtonLabel>
    </Button>
  )
}
