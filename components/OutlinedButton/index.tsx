import { RightLabel, StyledButton } from './styles'

interface OutlinedButtonProps {
  label: string
  rightLabel?: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const OutlinedButton = ({
  label,
  onClick,
  rightLabel,
}: OutlinedButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      {label}
      {rightLabel ? <RightLabel>{rightLabel}</RightLabel> : null}
    </StyledButton>
  )
}
