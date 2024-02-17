import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { type BuildOptions } from '../../../types/config'

export const cssLoader = (options: BuildOptions): webpack.RuleSetRule => ({
  test: /\.css$/,
  use: [
    options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
    },
  ],
})
