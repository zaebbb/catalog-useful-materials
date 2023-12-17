import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from '../../types/config'
import { buildDevelopmentPlugins } from './buildDevelopmentPlugins'
import { buildProductionPlugins } from './buildProductionPlugins'

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins: webpack.WebpackPluginInstance[] = []
  const { isDev, apiUrl } = options
  const isProd = !isDev

  plugins.push(new webpack.ProgressPlugin())
  plugins.push(new HTMLWebpackPlugin({
    template: options.paths.html,
  }))
  plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    })
  )

  if (isDev) {
    plugins.push(
      ...buildDevelopmentPlugins(options)
    )
  }

  if (isProd) {
    plugins.push(
      ...buildProductionPlugins(options)
    )
  }

  return plugins
}
