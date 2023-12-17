import type webpack from 'webpack'
import { type BuildOptions } from '../../types/config'

type BuildOutputResult = webpack.Configuration['output']

export const buildOutput = (options: BuildOptions): BuildOutputResult => ({
  filename: 'js/[name].[contenthash].js',
  path: options.paths.build,
  clean: true,
  publicPath: '/',
})
