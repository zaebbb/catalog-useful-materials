import { StoreDecorator } from '@config/storybook'
import {
  notesDetailsStoryData,
  patternArticleStoryData,
  patternBookStoryData,
  patternCodeStoryData,
  patternCourseStoryData,
  patternIssueStoryData,
  patternLayoutStoryData,
  patternServiceStoryData,
  patternTechnologyStoryData,
  patternVideoStoryData,
} from '@entities/Notes/lib/const/storybookDatas'
import type { Meta, StoryObj } from '@storybook/react'
import NoteViewPage from './NoteViewPage'

const meta: Meta<typeof NoteViewPage> = {
  title: 'pages/NoteViewPage',
  component: NoteViewPage,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NoteViewPage>

export const Primary: Story = {
  decorators: [StoreDecorator({
    noteDetails: { note: notesDetailsStoryData, isLoading: false },
  })],
}

export const IsLoading: Story = {
  decorators: [StoreDecorator({
    noteDetails: { isLoading: true },
  })],
}

export const PatternArticle: Story = {
  decorators: [StoreDecorator({
    noteDetails: {
      note: {
        ...notesDetailsStoryData,
        patternArticle: patternArticleStoryData,
      },
      isLoading: false,
    },
  })],
}

export const PatternTechnology: Story = {
  decorators: [StoreDecorator({
    noteDetails: {
      note: {
        ...notesDetailsStoryData,
        patternTechnology: patternTechnologyStoryData,
      },
      isLoading: false,
    },
  })],
}

export const PatternVideo: Story = {
  decorators: [StoreDecorator({
    noteDetails: {
      note: {
        ...notesDetailsStoryData,
        patternVideo: patternVideoStoryData,
      },
      isLoading: false,
    },
  })],
}

export const PatternLayout: Story = {
  decorators: [StoreDecorator({
    noteDetails: {
      note: {
        ...notesDetailsStoryData,
        patternLayout: patternLayoutStoryData,
      },
      isLoading: false,
    },
  })],
}

export const PatternCourse: Story = {
  decorators: [StoreDecorator({
    noteDetails: {
      note: {
        ...notesDetailsStoryData,
        patternCourse: patternCourseStoryData,
      },
      isLoading: false,
    },
  })],
}

export const PatternService: Story = {
  decorators: [StoreDecorator({
    noteDetails: {
      note: {
        ...notesDetailsStoryData,
        patternService: patternServiceStoryData,
      },
      isLoading: false,
    },
  })],
}

export const PatternBook: Story = {
  decorators: [StoreDecorator({
    noteDetails: {
      note: {
        ...notesDetailsStoryData,
        patternBook: patternBookStoryData,
      },
      isLoading: false,
    },
  })],
}

export const PatternIssue: Story = {
  decorators: [StoreDecorator({
    noteDetails: {
      note: {
        ...notesDetailsStoryData,
        patternIssue: patternIssueStoryData,
      },
      isLoading: false,
    },
  })],
}

export const PatternCode: Story = {
  decorators: [StoreDecorator({
    noteDetails: {
      note: {
        ...notesDetailsStoryData,
        patternCode: patternCodeStoryData,
      },
      isLoading: false,
    },
  })],
}
