export const formatName = (name: string): string => {
  return name.split('-').map(capitalize).join(' ')
}

export const capitalize = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1)
}
