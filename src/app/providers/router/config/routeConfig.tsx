import {
  AppRoutes,
  getRouteAbout, getRouteCreateNote, getRouteForbidden, getRouteLogin, getRouteLogout,
  getRouteMain,
  getRouteNotFound, getRouteProfile, getRouteRegister, getRouteViewNote,
} from '@lib/router'
import { getRoutePrivacyPolicy } from '@lib/router/helpers/routes'
import { AboutPage } from '@pages/AboutPage'
import { CreateNotePage } from '@pages/CreateNote'
import { LogoutPage } from '@pages/LogoutPage'
import { MainPage } from '@pages/MainPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { NoteViewPage } from '@pages/NoteViewPage'
import { PrivacyPolicyPage } from '@pages/PrivacyPolicy'
import { ProfilePage } from '@pages/ProfilePage'
import { LoginPage } from '@pages/UserPages/LoginPage'
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
    element: <LoginPage />,
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
    element: <PrivacyPolicyPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
}
