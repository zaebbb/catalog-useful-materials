import { generateKey } from '@lib/helpers/generateKey'

export const makeFilesFormat = (files: FileType[]): Files => {
  return files.map((file): FileData => ({
    file,
    key: generateKey(),
  }))
}
