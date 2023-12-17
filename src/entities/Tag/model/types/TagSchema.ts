export interface Tag {
  name: string
  code: string
}

export interface SelectTag {
  allTagsPath: string
  currentTags?: SelectItems<string>
  currentTagsIds?: number[]
}

export interface TagSchema {
  select: SelectTag
}
