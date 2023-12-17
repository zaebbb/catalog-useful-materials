import { classNames } from './classNames'

describe('Утилита classNames', () => {
  test('Тестирование с 1 параметром', () => {
    expect(classNames('className')).toBe('className')
  })
})
