import type webpack from 'webpack'

export const svgLoader: webpack.RuleSetRule = {
  test: /\.svg$/,
  use: [{
    loader: '@svgr/webpack',
    options: {
      icon: true,
      svgoConfig: {
        plugins: [
          {
            name: 'convertColors',
            params: {
              currentColor: true,
            },
          },
        ],
      },
    },
  }],
  exclude: /node_modules/,
}
