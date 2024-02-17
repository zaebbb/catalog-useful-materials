export enum NotesTypesCodeList {
  // Тип записи - статья
  ARTICLE = 'article',
  // Тип записи - Код
  CODE = 'code',
  // Тип записи - Задача
  ISSUE = 'issue',
  // Тип записи - Верстка
  LAYOUT = 'layout',
  // Тип записи - Полезный сервис
  SERVICE = 'service',
  // Тип записи - Технология
  TECHNOLOGY = 'technology',
  // Тип записи - Курс
  COURSE = 'course',
  // Тип записи - Книга
  BOOK = 'book',
  // Тип записи - Видео / конференция
  VIDEO = 'remote-source'
}

export interface NotesTypes {
  name: string
  code: NotesTypesCodeList
  isCustom: boolean
}

export interface NotesTypesListElement extends NotesTypes {
  id: number
  createdAt: string
  draft: boolean
}

export interface NotesTypesSchema {
  allNotesTypesPath: string
  currentNoteType?: SelectFieldOption<NotesTypesCodeList>
  isLoading: boolean
  validation?: string
}
