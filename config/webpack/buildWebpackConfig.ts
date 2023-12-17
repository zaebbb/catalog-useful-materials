import type webpack from 'webpack'
import { buildDevServer } from './lib/buildDevServer/buildDevServer'
import { buildLoaders } from './lib/buildLoaders/buildLoaders'
import { buildOptimization } from './lib/buildOptimization/buildOptimization'
import { buildOutput } from './lib/buildOutput/buildOutput'
import { buildPlugins } from './lib/buildPlugins/buildPlugins'
import { buildResolvers } from './lib/buildResolvers/buildResolvers'
import { type BuildOptions } from './types/config'

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const {
    mode, paths, isDev,
  } = options

  return {
    mode,
    entry: paths.entry,
    output: buildOutput(options),
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: buildOptimization(),
  }
}
