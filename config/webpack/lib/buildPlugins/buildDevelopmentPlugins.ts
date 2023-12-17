import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from '../../types/config'

export const buildDevelopmentPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins: webpack.WebpackPluginInstance[] = []

  plugins.push(new webpack.HotModuleReplacementPlugin())
  plugins.push(new ReactRefreshPlugin())
  plugins.push(new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: true,
  }))
  plugins.push(new ForkTsCheckerWebpackPlugin({
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
      mode: 'write-references',
    },
  }))

  return plugins
}
