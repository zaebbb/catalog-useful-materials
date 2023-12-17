import type webpack from 'webpack'
import { type BuildOptions } from '../../types/config'

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
  preferAbsolute: true,
  modules: [options.paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {
    '@ui-kit': options.paths['@ui-kit'],
    '@assets': options.paths['@assets'],
    '@config': options.paths['@config'],
    '@lib': options.paths['@lib'],
    '@layout': options.paths['@layout'],
    '@entities': options.paths['@entities'],
    '@features': options.paths['@features'],
    '@widgets': options.paths['@widgets'],
    '@pages': options.paths['@pages'],
    '@app': options.paths['@app'],
    '@api': options.paths['@api'],
    '@integrations': options.paths['@integrations'],
  },
})
