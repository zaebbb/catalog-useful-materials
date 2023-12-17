import { Editor, type IAllProps } from '@tinymce/tinymce-react'
import 'prismjs'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { getTinymcePlugins } from '../../config/tinymce/TinymcePlugins'
import { getTinymceToolbar } from '../../config/tinymce/TinymceToolbar'
import {
  tinymceCodeLanguagesList,
} from '../../config/tinymce/tinymceCodeLanguagesList'
import { getMenubar, getStatusbar } from '../../config/tinymce/tinymceCommon'
import { type TextareaMode } from '../../lib/types/TextareaFieldBaseTypes'

interface EditorComponentProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  height: number
  fileMessageClean: () => void
  mode: TextareaMode
}

export const EditorComponent: React.FC<EditorComponentProps> =
  memo((props: EditorComponentProps) => {
    const {
      height,
      setValue,
      value,
      fileMessageClean,
      mode,
    } = props

    const { t } = useTranslation()

    const config: IAllProps['init'] = React.useMemo((): IAllProps['init'] => ({
      language: t('current-lang'),
      height: height + 200,
      contextmenu: 'link image table accordion cut copy',
      menubar: getMenubar(mode),
      statusbar: getStatusbar(mode),
      // eslint-disable-next-line max-len
      content_css: ['https://fonts.googleapis.com/css2?family=Bangers&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'],
      plugins: getTinymcePlugins(mode),
      fontsize_formats: '8px 10px 12px 14px 18px 24px 36px 72px 144px',
      font_formats: 'Manrope=Manrope;Nunito Sans=Nunito Sans;',
      toolbar: getTinymceToolbar(mode),
      toolbar_mode: 'wrap',
      codesample_global_prismjs: true,
      codesample_languages: tinymceCodeLanguagesList,
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    }), [height, mode, t])

    const onChangeHandler = React.useCallback((handlerValue: string) => {
      setValue(handlerValue)
      fileMessageClean()
    }, [fileMessageClean, setValue])

    if (t('current-lang') === 'en_US') {
      return (
        <Editor
          apiKey='ulepas6cuglg1ryqivgy8q9nsfn5z4fsglme1bpaeh8zaoa3'
          value={value}
          onEditorChange={onChangeHandler}
          init={config}
        />
      )
    }

    return (
      <Editor
        apiKey='ulepas6cuglg1ryqivgy8q9nsfn5z4fsglme1bpaeh8zaoa3'
        value={value}
        onEditorChange={onChangeHandler}
        init={config}
      />
    )
  })
