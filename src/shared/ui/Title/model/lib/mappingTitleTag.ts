import { type HeaderTag, type HeadingVariant } from '../types/title'

/**
 * @type mappingTitleTag
 * @description Описывает объект состоящий из варианта заголовка и тега привязанного к нему
 * */
export const mappingTitleTag: Record<HeadingVariant, HeaderTag> = {
  extra: 'h1',
  large: 'h1',
  medium: 'h2',
  regular: 'h3',
  small: 'h4',
  mini: 'h5',
}
