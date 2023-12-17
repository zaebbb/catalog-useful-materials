export const getIdsMultipleSelect = <T extends string>(items: SelectItems<T>): number[] => {
  return items.map(item => item.id)
}
