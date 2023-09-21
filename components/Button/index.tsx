import { StyledButton } from './styles'

interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}
