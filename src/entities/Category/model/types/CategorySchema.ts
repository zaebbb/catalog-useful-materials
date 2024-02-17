export interface Category {
  name: string
  code: string
}

export interface CategoriesListElement extends Category {
  id: number
  createdAt: string
  draft: boolean
}

export interface SelectCategory {
  allCategoriesPath: string
  currentCategory?: SelectFieldOption<string>
  selected?: SelectFieldOption<string>
}

export interface CategorySchema {
  select: SelectCategory
}
