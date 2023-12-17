import { type TextareaMode } from '../../lib/types/TextareaFieldBaseTypes'

export const tinymceToolbar = 'undo redo | blocks | ' +
  'bold italic forecolor | ' +
  'fontfamily fontsize | ' +
  'charmap emoticons | ' +
  'visualchars visualblocks preview | ' +
  'searchreplace fullscreen | ' +
  'pagebreak nonbreaking | ' +
  'alignleft aligncenter alignright alignjustify | ' +
  'outdent indent | ' +
  'ltr rtl | ' +
  'bullist numlist | ' +
  'accordion link | ' +
  'code codesample | ' +
  'media image | ' +
  'insertdatetime | ' +
  'table tabledelete | ' +
  'tableprops tablerowprops tablecellprops | ' +
  'tableinsertrowbefore tableinsertrowafter tabledeleterow | ' +
  'tableinsertcolbefore tableinsertcolafter tabledeletecol |' +
  'removeformat anchor wordcount help'

export const getTinymceToolbar = (mode: TextareaMode): string | false => {
  if (mode === 'default') {
    return tinymceToolbar
  }

  if (mode === 'code') {
    return 'code codesample'
  }

  return false
}
