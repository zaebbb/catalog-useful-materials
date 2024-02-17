import { $axiosApi, STATUS_CODE_NOT_FOUND } from '@api/axiosApi'
import { getFileName } from '@lib/helpers/getFileDataFromUrl'
import { makeFormData } from '@lib/helpers/makeFormData'

export interface Request {
  filename: string
}

export const getFileDataApi = async (filename: string): Promise<FileType | undefined> => {
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

  if (response.status === STATUS_CODE_NOT_FOUND) {
    return undefined
  }

  const data = response.data
  const headers = response.headers

  return new File([data], getFileName(filename), {
    type: headers['content-type'],
  })
}
