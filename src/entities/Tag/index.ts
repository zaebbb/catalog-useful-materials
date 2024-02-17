export {
  TagReducer,
  TagActions,
} from './model/slice/TagSlice'
export {
  DeleteTagActions,
  DeleteTagReducer,
} from './model/slice/DeleteTagSlice'
export type {
  TagSchema,
  Tag,
  TagsListElement,
} from './model/types/TagSchema'
export type {
  DeleteTagSchema,
} from './model/types/DeleteTagSchema'
export {
  useTags,
} from './lib/hooks/useTags'
export { TagsList } from './ui/TagsList/TagsList'
export { TagForm } from './ui/TagForm/TagForm'
export { DeleteTagService } from './model/services/DeleteTagService'
export { getIsDeletedTagSelector } from './model/selectors/DeleteTagSelectors'
