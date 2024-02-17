export const ruToEngTransliterate = (
  text: string
): string => text
  .toLowerCase()
  .split('')
  .map(word => {
    if (/[a-z]/.test(word)) {
      return word
    }

    switch (word) {
      case ' ':
      case '-':
        return '-'
      case 'й':
        return 'j'
      case 'ц':
        return 'c'
      case 'у':
        return 'u'
      case 'к':
        return 'k'
      case 'е':
        return 'e'
      case 'н':
        return 'n'
      case 'г':
        return 'g'
      case 'ш':
        return 'sh'
      case 'щ':
        return 'shch'
      case 'з':
        return 'z'
      case 'х':
        return 'h'
      case 'ф':
        return 'f'
      case 'ы':
        return 'y'
      case 'в':
        return 'v'
      case 'а':
        return 'a'
      case 'п':
        return 'p'
      case 'р':
        return 'r'
      case 'о':
        return 'o'
      case 'л':
        return 'l'
      case 'д':
        return 'd'
      case 'ж':
        return 'zh'
      case 'э':
        return 'e'
      case 'я':
        return 'ya'
      case 'ч':
        return 'ch'
      case 'с':
        return 's'
      case 'м':
        return 'm'
      case 'и':
        return 'i'
      case 'т':
        return 't'
      case 'б':
        return 'b'
      case 'ю':
        return 'yu'
      case 'ё':
        return 'yo'
      default:
        return ''
    }
  })
  .join('')
