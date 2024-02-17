import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
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
} from '../../lib/const/storybookDatas'
import { NoteDetailsSidebar } from './NoteDetailsSidebar'

const meta: Meta<typeof NoteDetailsSidebar> = {
  title: 'entities/Notes/NoteDetailsSidebar',
  component: NoteDetailsSidebar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NoteDetailsSidebar>

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
