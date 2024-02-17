## Запуск проекта

1. Настроить серверную часть
2. Выполнить следующие команды:

- ```npm install``` - Установка основных зависимостей
- ```npm run start``` - Установка основных зависимостей

---

## Скрипты

- ```npm run start``` - Запуск проекта
- ```npm run build:prod``` - Сборка продакшена webpack
- ```npm run build:prod:analyze``` - Сборка продакшена webpack с анализатором сборки
- ```npm run build:dev``` - Сборка develop webpack
- ```npm run lint:ts``` - Проверка typescript файлов линтером eslint
- ```npm run lint:ts:warning``` - Проверка typescript файлов линтером eslint с отображением предупреждений
- ```npm run lint:ts:fix``` - Исправление typescript файлов линтером
- ```npm run lint:scss``` - Проверка scss файлов линтером stylelint
- ```npm run lint:scss:fix``` - Исправление scss файлов линтером stylelint
- ```npm run storybook``` - Запуск Storybook
- ```npm run storybook:build``` - Запуск сборки Storybook
- ```npm run ui:test``` - Проверка ui-тестов стори-кейсов с помощью пакета test-storybook
- ```npm run ui:test:chromatic``` - Проверка ui-тестов стори-кейсов с помощью chromatic
- ```npm run test:unit``` - Запуск Unit тестов Jest
- ```npm run prepare``` - прекоммит хуки

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## CI PipeLine и pre-commit хуки

Конфигурация github actions находится в .github/workflows/github-actions.yml

В ci идет прогон:
1. Установка npm пакетов
2. Сборка продакшена
3. Правила линтинга Eslint
4. Правила линтинга Stylelint
5. Сборка Storybook
6. Тестирование UI-компонентов
7. Unit тестирование

Перед отправкой в git выполняются pre-commit хуки на проверку линтинга

Конфигурация находится в .husky

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

##### Запуск линтеров
- ```npm run lint:ts``` - Проверка typescript файлов линтером eslint
- ```npm run lint:ts:warning``` - Проверка typescript файлов линтером eslint с отображением предупреждений
- ```npm run lint:ts:fix``` - Исправление typescript файлов линтером
- ```npm run lint:scss``` - Проверка scss файлов линтером stylelint
- ```npm run lint:scss:fix``` - Исправление scss файлов линтером stylelint

---

## Деплой проекта (подготовка к деплою)
1. Заменить **run.sh.example** на **run.sh**
2. Заменить путь проекта склонированного с git в **run.sh**
3. Заменить путь директории которую обрабатывает ваш веб-сервер в **run.sh**
4. Заменить значение `apiUrl` на начальную точку в **run.sh**
5. Прочитать рекомендации из **run.sh**
6. Заменить **.robots.txt** на **robots.txt**
7. Заменить домен для индексации сайта поисковыми роботами
8. Запустить скрипт run.sh

---

## Правила документирования компонентов
* **Common**
  * `Interface` `Type`
    * Каждый элемент подписан
    * **@type** или **@interface** - рядом наименование
    * **@description** - краткое описание того что содержит в себе
* **Shared**
  * `UI-Kit` `Layout` `Components`
    1. **@description** - общее описание документируемого компонента (пишется над компонентом)
    2. **@param** - описание параметра компонента из props (часть props, например className)
    3. **@module** - наименование модуля (пишется после импортов)
  * `API` `Helpers` `Hooks` `Functions`
    1. **@description** - общее описание документируемого куска кода
    2. **@param** - описание параметра передаваемого параметра
    3. **@module** - наименование модуля (пишется после импортов)
    4. **@return** - возвращаемое значение

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript tsx
import Profile from '@assets/icons/Profile.png'
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'ui-kit/Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: Profile,
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {}

export const PrimarySmall: Story = {
  args: {
    size: 'small',
  },
}

export const PrimaryLarge: Story = {
  args: {
    size: 'large',
  },
}
```

## Конфигурация проекта

Для разработки проект содержит 1 конфиг:
1. Webpack - ./config/webpack

Сборщики адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicReducerLoader](/src/shared/lib/components/DynamicReducerLoader/ui/DynamicReducerLoader.tsx)

----

## Сущности (entities)

- [Category](/src/entities/Category)
- [Counter](/src/entities/Counter)
- [GoogleAuth](/src/entities/GoogleAuth)
- [Notes](/src/entities/Notes)
- [NotesTypes](/src/entities/NotesTypes)
- [NotesViews](/src/entities/NotesViews)
- [Tag](/src/entities/Tag)
- [User](/src/entities/User)
- [VKAuth](/src/entities/VKAuth)

## Фичи (features)

- [CreateNotePatternArticle](/src/features/CreateNotePatternArticle)
- [CreateNotePatternBook](/src/features/CreateNotePatternBook)
- [CreateNotePatternCode](/src/features/CreateNotePatternCode)
- [CreateNotePatternCourse](/src/features/CreateNotePatternCourse)
- [CreateNotePatternIssue](/src/features/CreateNotePatternIssue)
- [CreateNotePatternLayout](/src/features/CreateNotePatternLayout)
- [CreateNotePatternService](/src/features/CreateNotePatternService)
- [CreateNotePatternTechnology](/src/features/CreateNotePatternTechnology)
- [CreateNotePatternVideo](/src/features/CreateNotePatternVideo)
- [LangSwitcher](/src/features/LangSwitcher)
- [ProfileEdit](/src/features/ProfileEdit)
- [UserLogin](/src/features/UserLogin)
- [UserRegister](/src/features/UserRegister)
