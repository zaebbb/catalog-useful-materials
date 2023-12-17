import { type TextareaMode } from '../../lib/types/TextareaFieldBaseTypes'

export const tinymcePlugins: string[] = [
  'accordion',
  'advlist',
  'autolink',
  'lists',
  'link',
  'image',
  'autosave',
  'charmap',
  'preview',
  'anchor',
  'searchreplace',
  'visualblocks',
  'fullscreen',
  'insertdatetime',
  'media',
  'table',
  'code',
  'help',
  'wordcount',
  'directionality',
  'emoticons',
  'nonbreaking',
  'pagebreak',
  'visualchars',
  'save',
  'codesample',
]

export const getTinymcePlugins = (mode: TextareaMode): string[] => {
  if (mode === 'default') {
    return tinymcePlugins
  }

  if (mode === 'code') {
    return ['code', 'codesample']
  }

  return []
}
