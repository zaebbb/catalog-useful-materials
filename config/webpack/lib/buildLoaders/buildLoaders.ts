import type webpack from 'webpack'
import { type BuildOptions } from '../../types/config'
import { babelLoader } from './loaders/babelLoader'
import { cssLoader } from './loaders/cssLoader'
import { fileLoader } from './loaders/fileLoader'
import { scssLoader } from './loaders/scssLoader'
import { svgLoader } from './loaders/svgLoader'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => ([
  fileLoader,
  svgLoader,
  cssLoader(options),
  scssLoader(options),
  babelLoader(options),
])
