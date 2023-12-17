import React from 'react'

/** @module TypedMemo */

/**
 * @description Компонент мемоизирующий переданный компонент
 * @param {T} component - Передаваемое значение
 * */
export const TypedMemo: <T>(component: T) => T = React.memo
