import type webpack from 'webpack'

export const fileLoader: webpack.RuleSetRule = {
  test: /\.(png|jpe?g|gif|woff2|woff)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'assets/[contenthash].[ext]',
      },
    },
  ],
}
