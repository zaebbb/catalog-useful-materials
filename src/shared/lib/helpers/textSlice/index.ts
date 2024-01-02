export const textSlice = (text: string, lengthWords: number = 20) => {
  const textArr = text.split(' ')

  if (textArr.length > lengthWords) {
    return textArr.slice(0, lengthWords).join(' ') + '...'
  }

  return text
}
