import {
  AppRoutes,
  getRouteAbout, getRouteCreateNote, getRouteForbidden, getRouteLogin, getRouteLogout,
  getRouteMain,
  getRouteNotFound, getRouteProfile, getRouteRegister, getRouteUserViewNotes, getRouteViewNote,
} from '@lib/router'
import { getRoutePrivacyPolicy } from '@lib/router/helpers/routes'
import { AboutPage } from '@pages/AboutPage'
import { CreateNotePage } from '@pages/CreateNote'
import { ForbiddenPage } from '@pages/ForbiddenPage'
import { LogoutPage } from '@pages/LogoutPage'
import { MainPage } from '@pages/MainPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { NoteViewPage } from '@pages/NoteViewPage'
import { PrivacyPolicyPage } from '@pages/PrivacyPolicy'
import { ProfilePage } from '@pages/ProfilePage'
import { UserNotesPage } from '@pages/UserNotes'
import { LoginPage } from '@pages/UserPages/LoginPage'
import { RegisterPage } from '@pages/UserPages/RegisterPage'
import { type RouteItem } from '../types/router'

export const routeConfig: Record<AppRoutes, RouteItem> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: getRouteRegister(),
    element: <RegisterPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
    isAuth: true,
  },
  [AppRoutes.CREATE_NOTE]: {
    path: getRouteCreateNote(),
    element: <CreateNotePage />,
    isAuth: true,
  },
  [AppRoutes.NOTE_DETAILS]: {
    path: getRouteViewNote(':id'),
    element: <NoteViewPage />,
    isAuth: true,
  },
  [AppRoutes.USER_NOTES]: {
    path: getRouteUserViewNotes(),
    element: <UserNotesPage />,
    isAuth: true,
  },
  [AppRoutes.PRIVACY]: {
    path: getRoutePrivacyPolicy(),
    element: <PrivacyPolicyPage />,
  },
  [AppRoutes.LOGOUT]: {
    path: getRouteLogout(),
    element: <LogoutPage />,
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
}
