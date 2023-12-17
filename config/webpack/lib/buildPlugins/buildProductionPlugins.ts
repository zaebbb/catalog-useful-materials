import CopyPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { type BuildOptions } from '../../types/config'

export const buildProductionPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins: webpack.WebpackPluginInstance[] = []

  plugins.push(new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }))

  if (options.isBuildAnalyze) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: options.isBuildAnalyze,
    }))
  }

  plugins.push(new CopyPlugin({
    patterns: [
      { from: options.paths.locales, to: options.paths.buildLocales },
    ],
  }))

  return plugins
}
