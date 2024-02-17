import { $axiosApi } from '@api/axiosApi'
import DocViewer, { DocViewerRenderers, type IDocument } from '@cyntler/react-doc-viewer'
import { classNames } from '@lib/helpers/classNames'
import { type Request } from '@lib/helpers/getFileDataApi'
import { isLink } from '@lib/helpers/isLink'
import { makeFormData } from '@lib/helpers/makeFormData'
import { Button } from '@ui-kit/Button'
import { DocViewError } from '@ui-kit/DocView/ui/DocViewError/DocViewError'
import { HStack, VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DocViewHeader } from '../DocViewHeader/DocViewHeader'
import { DocViewLoader } from '../DocViewLoader/DocViewLoader'
import cls from './DocView.module.scss'

interface DocViewProps {
  className?: string
  filename?: string
  isButtonRender?: boolean
}

export const DocView: React.FC<DocViewProps> = memo((props: DocViewProps) => {
  const {
    className,
    filename = '',
    isButtonRender = false,
  } = props
  const { t } = useTranslation('ui-kit')

  const [
    docs,
    setDocs,
  ] = React.useState<IDocument[]>([])

  const [
    isFetchData,
    setIsFetchData,
  ] = React.useState<boolean>(false)

  const fetchFile = React.useCallback(async () => {
    if (filename && !isLink(filename)) {
      const response = await $axiosApi.post(
        '/upload/file',
        makeFormData<Request>({
          data: {
            filename,
          },
        }), {
          responseType: 'blob',
        }
      )

      const data = response.data
      const headers = response.headers

      const blob = new Blob([data], { type: headers['content-type'] })
      const blobUrl = URL.createObjectURL(blob)

      setDocs([{ uri: blobUrl }])
    }
  }, [filename])

  const onDownloadHandler = React.useCallback(() => {
    window.open(`${__API__}upload/${filename}`)
  }, [filename])

  const onRenderHandler = React.useCallback(() => {
    if (!isFetchData) {
      fetchFile()
      setIsFetchData(true)
    }
  }, [fetchFile, isFetchData])

  if (!filename || isLink(filename)) {
    return null
  }

  return (
    <VStack
      gap={20}
      className={classNames(cls.DocView, {}, [className])}
    >
      <HStack gap={12}>
        <Button onClick={onDownloadHandler}>
          {t('doc-view-download-file')}
        </Button>

        {Boolean(!isFetchData && isButtonRender) && (
          <Button
            theme={'gradient'}
            onClick={onRenderHandler}
          >
            {t('doc-view-render-file')}
          </Button>
        )}
      </HStack>

      {Boolean(docs.length) && (
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          config={{
            header: {
              overrideComponent: DocViewHeader,
            },
            loadingRenderer: {
              overrideComponent: DocViewLoader,
            },
            noRenderer: {
              overrideComponent: DocViewError,
            },
          }}
        />
      )}
    </VStack>
  )
})
