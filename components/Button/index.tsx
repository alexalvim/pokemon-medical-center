import { StyledButton } from './styles'

interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'reset' | 'button' | 'submit'
}

export const Button = ({ label, onClick, type }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} {...(type ? { type } : {})}>
      {label}
    </StyledButton>
  )
}
