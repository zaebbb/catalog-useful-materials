import { StoreDecorator } from '@config/storybook'
import { type NoteBaseFieldsSchema } from '@entities/Notes'
import { NotesTypesCodeList } from '@entities/NotesTypes'
import type { Meta, StoryObj } from '@storybook/react'
import { EditNoteForm } from './EditNoteForm'

const baseValues: NoteBaseFieldsSchema['values'] = {
  title: 'test',
  description: '',
  draft: false,
  fields: [],
}

const baseValidation: NoteBaseFieldsSchema['validation'] = {
  title: 'Ошибка заголовка',
  description: 'Ошибка описания',
  draft: 'Ошибка черновика',
  tagsIds: 'Ошибка тегов',
  categoryId: 'Ошибка категории',
  viewId: 'Ошибка публички',
}

const meta: Meta<typeof EditNoteForm> = {
  title: 'widgets/EditNoteForm',
  component: EditNoteForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EditNoteForm>

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      notesTypes: {
        allNotesTypesPath: '',
      },
    }),
  ],
}

export const ArticlePrimary: Story = {
  decorators: [
    StoreDecorator({
      notesTypes: {
        allNotesTypesPath: '',
        currentNoteType: { code: NotesTypesCodeList.ARTICLE, content: 'Статья', id: 1 },
      },
    }),
  ],
}

export const ArticleIsLoading: Story = {
  decorators: [
    StoreDecorator({
      notesTypes: {
        allNotesTypesPath: '',
        isLoading: true,
        currentNoteType: { code: NotesTypesCodeList.ARTICLE, content: 'Статья', id: 1 },
      },
      noteBaseField: {
        isLoading: true,
        values: baseValues,
      },
      notePatternArticle: {
        isLoading: true,
        editValues: {
          image: '',
        },
        values: {
          linkNote: '',
          linkVideo: '',
        },
      },
    }),
  ],
}

export const ArticleValidation: Story = {
  decorators: [
    StoreDecorator({
      notesTypes: {
        allNotesTypesPath: '',
        validation: 'Ошибка типа заметки',
        currentNoteType: { code: NotesTypesCodeList.ARTICLE, content: 'Статья', id: 1 },
      },
      noteBaseField: {
        values: baseValues,
        validation: baseValidation,
      },
      notePatternArticle: {
        validation: {
          image: 'Ошибка изображения',
          linkNote: 'Ошибка ссылки',
          linkVideo: 'Ошибка видео',
        },
        editValues: {
          image: '',
        },
        values: {
          linkNote: '',
          linkVideo: '',
        },
      },
    }),
  ],
}
