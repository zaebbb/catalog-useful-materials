export interface Tag {
  name: string
  code: string
}

export interface TagsListElement extends Tag {
  id: number
  createdAt: string
  draft: boolean
}

export interface SelectTag {
  allTagsPath: string
  currentTags?: SelectItems<string>
  currentTagsIds?: number[]
  selected?: SelectItems<string>
}

export interface TagSchema {
  select: SelectTag
}
