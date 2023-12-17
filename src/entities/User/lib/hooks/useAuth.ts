import { useSelector } from 'react-redux'
import {
  accessIsAdmin,
  accessIsUser,
  getUserAccesses,
  getUserInfo, getUserIsLoading,
  getUserIsMounted,
} from '../../model/selectors/UserSelectors'
import { UserActions } from '../../model/slice/UserSlice'
import { type Access, type UserBaseData } from '../../model/types/UserSchema'

export interface UseAuthResult {
  isMounted: boolean
  isUser: boolean
  isAdmin: boolean
  isLoading: boolean
  userData: UserBaseData
  accesses: Access[]
  fnExit: () => void
}

export const useAuth = (): UseAuthResult => {
  const isMounted = useSelector(getUserIsMounted)
  const isUser = useSelector(accessIsUser)
  const isLoading = useSelector(getUserIsLoading)
  const isAdmin = useSelector(accessIsAdmin)
  const userData = useSelector(getUserInfo)
  const accesses = useSelector(getUserAccesses)
  const fnExit = UserActions.exitAccount

  return {
    isMounted,
    isUser,
    isAdmin,
    isLoading,
    userData,
    accesses,
    fnExit,
  }
}
