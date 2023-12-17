export interface Category {
  name: string
  code: string
}

export interface SelectCategory {
  allCategoriesPath: string
  currentCategory?: SelectFieldOption<string>
}

export interface CategorySchema {
  select: SelectCategory
}
