import cls from '../../styles/IconCommon.module.scss'
import { type IconPadding, type IconSize } from '../types/IconTypes'

/**
 * @description Функция получающая из файла со стилями наименование класса для размера иконки
 * @param {IconSize} iconSize - Размер иконки
 * @returns {string} - Получает из scss модуля класс
 * */
export const mapperSize = (iconSize: IconSize): string => cls[`size-${iconSize}`]

/**
 * @description Функция получающая из файла со стилями наименование класса для padding иконки
 * @param {IconPadding} iconPadding - Padding иконки
 * @returns {string} - Получает из scss модуля класс
 * */
export const mapperPadding = (iconPadding: IconPadding): string => cls[`padding-${iconPadding}`]
