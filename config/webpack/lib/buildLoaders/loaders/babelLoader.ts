import type webpack from 'webpack'
import { type BuildOptions } from '../../../types/config'

export const babelLoader = (options: BuildOptions): webpack.RuleSetRule => ({
  test: /\.(jsx|tsx|js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/plugin-transform-typescript',
        '@babel/plugin-transform-runtime',
        options.isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
})
