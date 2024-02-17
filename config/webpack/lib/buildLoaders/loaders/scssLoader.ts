import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { type BuildOptions } from '../../../types/config'

export const scssLoader = (options: BuildOptions): webpack.RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(
            resPath.includes('.module.scss')
          ),
          localIdentName: options.isDev
            ? '[path][name]__[local]'
            : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          options.styles.mixins['ui-kit'],
          options.styles.mixins.inputs,
          options.styles.mixins.animation,
        ],
        hoistUseStatements: true,
      },
    },
  ],
})
