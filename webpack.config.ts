import path from 'path'
import type webpack from 'webpack'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'
import {
  type BuildEnv,
  type BuildMode,
  type BuildPaths,
  type Styles,
} from './config/webpack/types/config'

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),

    // aliases
    '@ui-kit': path.resolve(__dirname, 'src', 'shared', 'ui'),
    '@api': path.resolve(__dirname, 'src', 'shared', 'api'),
    '@lib': path.resolve(__dirname, 'src', 'shared', 'lib'),
    '@layout': path.resolve(__dirname, 'src', 'shared', 'layout'),
    '@entities': path.resolve(__dirname, 'src', 'entities'),
    '@features': path.resolve(__dirname, 'src', 'features'),
    '@widgets': path.resolve(__dirname, 'src', 'widgets'),
    '@pages': path.resolve(__dirname, 'src', 'pages'),
    '@app': path.resolve(__dirname, 'src', 'app'),
    '@assets': path.resolve(__dirname, 'src', 'shared', 'assets'),
    '@config': path.resolve(__dirname, 'src', 'shared', 'config'),
    '@integrations': path.resolve(__dirname, 'src', 'shared', 'integrations'),
  }

  const styles: Styles = {
    mixins: {
      'ui-kit': path.resolve(
        __dirname, 'src', 'app', 'styles', 'variables', 'mixins', 'ui-kit.scss'
      ),
      inputs: path.resolve(
        __dirname, 'src', 'app', 'styles', 'variables', 'mixins', 'inputs.scss'
      ),
      animation: path.resolve(
        __dirname, 'src', 'app', 'styles', 'variables', 'mixins', 'animation.scss'
      ),
    },
  }

  const mode: BuildMode = env?.mode || 'development'
  const port: number = env?.port || 3000
  const apiUrl: string = env?.apiUrl
  const isBuildAnalyze: boolean = env?.isBuildAnalyze ?? false

  const isDev = mode === 'development'

  return buildWebpackConfig({
    mode,
    paths,
    port,
    isDev,
    apiUrl,
    styles,
    isBuildAnalyze,
  })
}
