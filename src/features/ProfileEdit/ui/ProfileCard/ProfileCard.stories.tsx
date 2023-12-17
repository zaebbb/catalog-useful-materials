import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
  title: 'features/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProfileCard>

export const ProfileCardPrimary: Story = {
  decorators: [
    StoreDecorator({
      profileEdit: {
        user: {
          name: 'Тест',
          patronymic: 'Тестович',
          surname: 'Тестов',
        },
        isLoading: false,
      },
      user: {
        _mounted: true,
      },
    }),
  ],
}

export const ProfileCardIsLoading: Story = {
  decorators: [
    StoreDecorator({
      profileEdit: {
        user: {
          name: 'Тест',
          patronymic: 'Тестович',
          surname: 'Тестов',
        },
        isLoading: true,
      },
      user: {
        _mounted: true,
      },
    }),
  ],
}

export const ProfileCardValidation: Story = {
  decorators: [
    StoreDecorator({
      profileEdit: {
        user: {
          name: 'Тест',
          patronymic: 'Тестович',
          surname: 'Тестов',
        },
        validation: {
          surname: 'Ошибка',
          patronymic: 'Ошибка',
          name: 'Ошибка',
        },
        isLoading: false,
      },
      user: {
        _mounted: true,
      },
    }),
  ],
}
