export type Mods = Record<string, boolean | string | undefined>
export type Additional = Array<string | undefined>

export const classNames = (
  cls: string = '',
  mods: Mods = {},
  additional: Additional = []
): string => (
  [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
)
