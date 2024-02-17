export enum NotesViewsCodeList {
  // Тип видимости - публичный
  PUBLIC = 'public',
  // Тип видимости - приватный
  PRIVATE = 'private'
}

export interface NotesViews {
  name: string
  code: NotesViewsCodeList
}

export interface NotesViewsSchema {
  allNotesViewsPath: string
  currentNoteView?: SelectFieldOption<NotesViewsCodeList>
  selected?: SelectFieldOption<NotesViewsCodeList>
}
