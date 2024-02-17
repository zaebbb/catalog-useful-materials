import { rtkApi } from '@api/rtkApi'
import { type UsersListResponse } from '../model/types/UsersListSchema'

const usersListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUsersList: build.query<UsersListResponse, void>({
      query: () => ({
        url: '/users/all',
      }),
    }),
  }),
})

export const useUsersList = usersListApi.useGetUsersListQuery
