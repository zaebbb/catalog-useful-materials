import { rtkApi } from '@api/rtkApi'
import { type TagsListResponse } from '../model/types/TagsListSchema'

const tagsListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getTagsList: build.query<TagsListResponse, void>({
      query: () => ({
        url: '/tag/all',
      }),
    }),
  }),
})

export const useTagsList = tagsListApi.useGetTagsListQuery
