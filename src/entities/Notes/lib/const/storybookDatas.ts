import Profile from '@assets/icons/Profile.png'
import TestImage from '@assets/image/test-image.jpg'
import { NotesTypesCodeList } from '@entities/NotesTypes'
import { NotesViewsCodeList } from '@entities/NotesViews'
import { type UserNotesListElement } from '@features/UserNotesList/model/types/NotesListSchema'
import { generateKey } from '@lib/helpers/generateKey'
import { type BaseFieldsDetails } from '../../model/types/NotesDetailsSchema'

const videoUrl: string = 'https://youtu.be/quSCXTL6trw'

export const notesDetailsStoryData: BaseFieldsDetails = {
  type: { code: NotesTypesCodeList.CODE, name: 'Тип заметки', isCustom: false },
  createdAt: String(new Date(0).valueOf()),
  draft: false,
  title: 'Тест заголовка',
  tags: [{ code: 'code', name: 'Тег 1' }, { code: 'code2', name: 'Тег 2' }],
  category: { code: 'category', name: 'Тест категории' },
  view: { code: NotesViewsCodeList.PUBLIC, name: 'Тест видимости' },
  description: 'Описание заметки',
  user: {
    id: 1,
    avatar: Profile,
    username: 'Username',
    email: 'example@gmail.com',
  },
}

export const noteListItem: UserNotesListElement = {
  category: notesDetailsStoryData.category,
  createdAt: notesDetailsStoryData.createdAt,
  description: notesDetailsStoryData.description,
  code: generateKey(),
  title: notesDetailsStoryData.title,
  id: 1,
}

export const patternArticleStoryData: BaseFieldsDetails['patternArticle'] = {
  linkVideo: { name: 'video', value: videoUrl },
  image: { name: 'image', value: TestImage },
  linkNote: { name: 'link', value: videoUrl },
}

export const patternTechnologyStoryData: BaseFieldsDetails['patternTechnology'] = {
  linkTechnology: { name: 'tech', value: videoUrl },
  linkDocs: { name: 'linkDocs', value: videoUrl },
  linkInstall: { name: 'linkInstall', value: videoUrl },
  icon: { name: 'icon', value: TestImage },
}

export const patternVideoStoryData: BaseFieldsDetails['patternVideo'] = {
  linkVideo: { name: 'video', value: videoUrl },
}

export const patternLayoutStoryData: BaseFieldsDetails['patternLayout'] = {
  linkLayout: { name: 'layout', value: videoUrl },
  imageLayout: { name: 'image', value: TestImage },
}

export const patternCourseStoryData: BaseFieldsDetails['patternCourse'] = {
  linkCourse: { name: 'link', value: videoUrl },
  authorCourse: { name: 'author', value: 'Dev-proger' },
}

export const patternServiceStoryData: BaseFieldsDetails['patternService'] = {
  linkService: { name: 'service', value: videoUrl },
}

export const patternBookStoryData: BaseFieldsDetails['patternBook'] = {
  linkBook: { name: 'link', value: videoUrl },
  fileBook: { name: 'file', value: TestImage },
}

export const patternIssueStoryData: BaseFieldsDetails['patternIssue'] = {
  linkIssue: { name: 'link', value: videoUrl },
  imageIssue: { name: 'image', value: Profile },
}

export const patternCodeStoryData: BaseFieldsDetails['patternCode'] = {
  code: {
    name: 'code',
    value: `<pre class="language-typescript"><code>
export const notesDetailsStoryData: BaseFieldsDetails = {
  type: { code: NotesTypesCodeList.CODE, name: 'Тип заметки', isCustom: false },
  createdAt: '05.10.2002',
  draft: false,
  title: 'Тест заголовка',
  tags: [{ code: 'code', name: 'Тег 1' }, { code: 'code2', name: 'Тег 2' }],
  category: { code: 'category', name: 'Тест категории' },
  view: { code: NotesViewsCodeList.PUBLIC, name: 'Тест видимости' },
  description: 'Описание заметки',
  user: {
    id: 1,
    avatar: Profile,
    username: 'Username',
    email: 'example@gmail.com',
  },
}
</code></pre>`,
  },
}
