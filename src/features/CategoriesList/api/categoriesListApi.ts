import { rtkApi } from '@api/rtkApi'
import { type CategoriesListResponse } from '../model/types/CategoriesListSchema'

const categoriesListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCategoriesList: build.query<CategoriesListResponse, void>({
      query: () => ({
        url: '/category/all',
      }),
    }),
  }),
})

export const useCategoriesList = categoriesListApi.useGetCategoriesListQuery
