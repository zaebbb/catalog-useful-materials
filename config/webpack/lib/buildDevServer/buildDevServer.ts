import { type Configuration } from 'webpack-dev-server'
import { type BuildOptions } from '../../types/config'

export const buildDevServer = (options: BuildOptions): Configuration => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true,
})
