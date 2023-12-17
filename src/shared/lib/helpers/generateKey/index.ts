import { v4 } from 'uuid'

/** @module generateKey */

/**
 * @description Генерирует ключ для итерируемых компонентов react с помощью uuid
 * @return {string} Сгенерированная случайная строка
 * */
export const generateKey = (): string => v4()
