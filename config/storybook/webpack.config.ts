import path from 'path'
import webpack from 'webpack'
import { scssLoader } from '../webpack/lib/buildLoaders/loaders/scssLoader'
import { svgLoader } from '../webpack/lib/buildLoaders/loaders/svgLoader'
import { type BuildOptions, type BuildPaths, type Styles } from '../webpack/types/config'

const paths: BuildPaths = {
  entry: '',
  src: path.resolve(__dirname, '..', '..', 'src'),
  build: '',
  html: '',
  locales: '',
  buildLocales: '',
  '@ui-kit': path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui'),
  '@api': path.resolve(__dirname, '..', '..', 'src', 'shared', 'api'),
  '@assets': path.resolve(__dirname, '..', '..', 'src', 'shared', 'assets'),
  '@entities': path.resolve(__dirname, '..', '..', 'src', 'entities'),
  '@app': path.resolve(__dirname, '..', '..', 'src', 'app'),
  '@widgets': path.resolve(__dirname, '..', '..', 'src', 'widgets'),
  '@pages': path.resolve(__dirname, '..', '..', 'src', 'pages'),
  '@lib': path.resolve(__dirname, '..', '..', 'src', 'shared', 'lib'),
  '@layout': path.resolve(__dirname, '..', '..', 'src', 'shared', 'layout'),
  '@features': path.resolve(__dirname, '..', '..', 'src', 'features'),
  '@config': path.resolve(__dirname, '..', '..', 'src', 'shared', 'config'),
  '@integrations': path.resolve(__dirname, '..', '..', 'src', 'shared', 'integrations'),
}

const styles: Styles = {
  mixins: {
    'ui-kit': path.resolve(
      __dirname, '..', '..', 'src', 'app', 'styles', 'variables', 'mixins', 'ui-kit.scss'
    ),
    inputs: path.resolve(
      __dirname, '..', '..', 'src', 'app', 'styles', 'variables', 'mixins', 'inputs.scss'
    ),
    animation: path.resolve(
      __dirname, '..', '..', 'src', 'app', 'styles', 'variables', 'mixins', 'animation.scss'
    ),
  },
}

const options: BuildOptions = {
  mode: 'development',
  port: NaN,
  isDev: true,
  paths,
  apiUrl: 'http://localhost:8000/',
  styles,
}

export default ({ config }: { config: webpack.Configuration }) => {
  config.resolve!.modules!.push(paths.src)
  config.resolve!.extensions!.push('.ts', '.tsx')

  config.resolve!.alias = {
    ...config.resolve?.alias,
    '@ui-kit': paths['@ui-kit'],
    '@lib': paths['@lib'],
    '@layout': paths['@layout'],
    '@entities': paths['@entities'],
    '@features': paths['@features'],
    '@widgets': paths['@widgets'],
    '@pages': paths['@pages'],
    '@app': paths['@app'],
    '@api': paths['@api'],
    '@assets': paths['@assets'],
    '@config': paths['@config'],
    '@integrations': paths['@integrations'],
  }

  const rules = config.module?.rules as webpack.RuleSetRule[]

  config.module!.rules = rules.map((rule: webpack.RuleSetRule) => {
    // eslint-disable-next-line
    if(/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config?.module?.rules?.push(svgLoader)

  config?.module?.rules?.push(scssLoader(options))

  config?.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000/api/v1/'),
  }))

  return config
}
