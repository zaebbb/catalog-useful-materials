declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const __IS_DEV__: boolean
declare const __API__: string

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>
} : T

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}

interface FileType extends File {
  src?: string
}

interface FileData {
  file: FileType
  key: string
}

type Files = FileData[]

/**
 * @interface SelectFieldOption
 * @description Описывает передаваемые параметры одну опцию
 * @description Передается generic наследуемый от string
 * */
interface SelectFieldOption<T extends string> {
  /** Основное содержимое option */
  content: string
  /** Код опции */
  code: T
  /** Идентификатор записи */
  id: number
}

/**
 * @type SelectItems
 * @description Описывает массив входящих элементов select
 * @description Передается generic наследуемый от string
 * */
type SelectItems<T extends string> = Array<SelectFieldOption<T>>
