export type BuildMode = 'development' | 'production'

export interface StylesMixins {
  'ui-kit': string
  inputs: string
  animation: string
}

export interface Styles {
  mixins: StylesMixins
}

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string

  // aliases
  '@ui-kit': string
  '@lib': string
  // '@variable': string
  '@api': string
  '@assets': string
  '@layout': string
  '@app': string
  '@entities': string
  '@features': string
  '@widgets': string
  '@pages': string
  '@config': string
  '@integrations': string

  // i18next
  locales: string
  buildLocales: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
  isBuildAnalyze: boolean
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  styles: Styles
  isDev: boolean
  port: number
  apiUrl: string
  isBuildAnalyze: boolean
}
