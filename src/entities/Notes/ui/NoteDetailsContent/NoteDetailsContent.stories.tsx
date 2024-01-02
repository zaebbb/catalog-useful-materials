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
import { NoteDetailsContent } from './NoteDetailsContent'

const meta: Meta<typeof NoteDetailsContent> = {
  title: 'entities/NoteDetailsContent',
  component: NoteDetailsContent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NoteDetailsContent>

export const Primary: Story = {
  decorators: [StoreDecorator({
    noteDetails: { note: notesDetailsStoryData },
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
    },
  })],
}
