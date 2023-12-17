import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { type BuildOptions } from '../../../types/config'

export const cssLoader = (options: BuildOptions): webpack.RuleSetRule => ({
  test: /\.css$/,
  use: [
    options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      // TODO: делать укороченные именование для всех кроме prismjs (придумать - поиска как)
      // options: {
      //   modules: {
      //     localIdentName: options.isDev
      //       ? '[path][name]__[local]'
      //       : '[hash:base64:8]',
      //   },
      // },
    },
  ],
})
