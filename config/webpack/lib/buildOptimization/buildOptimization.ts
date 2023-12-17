import type webpack from 'webpack'

type BuildOptimizationOptions = webpack.Configuration['optimization']

export const buildOptimization = (): BuildOptimizationOptions => ({
  runtimeChunk: true,
  splitChunks: {
    chunks: 'all',
  },
})
