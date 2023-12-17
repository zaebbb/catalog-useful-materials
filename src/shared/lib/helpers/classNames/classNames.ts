export type Mods = Record<string, boolean | string | undefined>
export type Additional = Array<string | undefined>

/** @module classNames */

/**
 * @description Функция складывающая различные классы в единую строку
 * @param {string} cls - Главный передаваемый класс
 * @param {Mods} mods - Моды передаваемые как объект в виде string:boolean
 * @param {Additional} additional - Массив строк в котором передаются классы
 * @returns {string} - Собранная цельная строка
 * */
export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Additional = []
): string => (
  [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
)
