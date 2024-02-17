export const isLink = (text: string): boolean => {
  if (text.startsWith('http://')) {
    return true
  }

  if (text.startsWith('https://')) {
    return true
  }

  return false
}
