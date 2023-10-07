import path from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import { type BuildPaths } from '../webpack/types/config'

const paths: BuildPaths = {
  entry: '',
  src: path.resolve(__dirname, '..', '..', 'src'),
  build: '',
  html: '',
  '@ui-kit': path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui'),
  '@entities': path.resolve(__dirname, '..', '..', 'src', 'entities'),
  '@app': path.resolve(__dirname, '..', '..', 'src', 'app'),
  '@widgets': path.resolve(__dirname, '..', '..', 'src', 'widgets'),
  '@pages': path.resolve(__dirname, '..', '..', 'src', 'pages'),
  '@lib': path.resolve(__dirname, '..', '..', 'src', 'shared', 'lib'),
  '@layout': path.resolve(__dirname, '..', '..', 'src', 'shared', 'layout'),
  '@features': path.resolve(__dirname, '..', '..', 'src', 'features'),
}

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    if (config?.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '@ui-kit': paths['@ui-kit'],
        '@lib': paths['@lib'],
        '@layout': paths['@layout'],
        '@entities': paths['@entities'],
        '@features': paths['@features'],
        '@widgets': paths['@widgets'],
        '@pages': paths['@pages'],
        '@app': paths['@app'],
      }
    }

    config?.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(
                resPath.includes('.module.scss')
              ),
            },
          },
        },
        'sass-loader',
      ],
    })

    return config
  },
}
export default config
