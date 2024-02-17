import {
  AppRoutes,
  getRouteAbout,
  getRouteAdmin, getRouteAdminCreateNoteType,
  getRouteAdminEditUser, getRouteAdminNotesTypes,
  getRouteAdminUsers,
  getRouteCategories,
  getRouteCreateCategory,
  getRouteCreateNote,
  getRouteCreateTag,
  getRouteEditCategory, getRouteEditNote,
  getRouteEditTag,
  getRouteForbidden,
  getRouteLogin,
  getRouteLogout,
  getRouteMain,
  getRouteNotFound,
  getRouteProfile,
  getRouteRegister,
  getRouteSitemap,
  getRouteTags,
  getRouteUserViewNotes,
  getRouteViewNote,
} from '@lib/router'
import { getRoutePrivacyPolicy } from '@lib/router/helpers/routes'
import { AboutPage } from '@pages/AboutPage'
import { AdminPage } from '@pages/AdminPages/AdminPage'
import { CategoriesPage } from '@pages/AdminPages/CategoriesPage'
import { CreateCategoryPage } from '@pages/AdminPages/CreateCategoryPage'
import { CreateNoteTypePage } from '@pages/AdminPages/CreateNoteTypePage'
import { CreateTagPage } from '@pages/AdminPages/CreateTagPage'
import { EditCategoryPage } from '@pages/AdminPages/EditCategoryPage'
import { EditTagPage } from '@pages/AdminPages/EditTagPage'
import { NotesTypesPage } from '@pages/AdminPages/NotesTypesPage'
import { TagsPage } from '@pages/AdminPages/TagsPage'
import { UserEditPage } from '@pages/AdminPages/UserEditPage'
import { UsersPage } from '@pages/AdminPages/UsersPage'
import { CreateNotePage } from '@pages/CreateNote'
import { EditNotePage } from '@pages/EditNotePage'
import { ForbiddenPage } from '@pages/ForbiddenPage'
import { LogoutPage } from '@pages/LogoutPage'
import { MainPage } from '@pages/MainPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { NoteViewPage } from '@pages/NoteViewPage'
import { PrivacyPolicyPage } from '@pages/PrivacyPolicy'
import { ProfilePage } from '@pages/ProfilePage'
import { SitemapPage } from '@pages/SitemapPage'
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
  [AppRoutes.SITEMAP]: {
    path: getRouteSitemap(),
    element: <SitemapPage />,
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
  [AppRoutes.ADMIN]: {
    path: getRouteAdmin(),
    element: <AdminPage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_TAGS]: {
    path: getRouteTags(),
    element: <TagsPage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_CREATE_TAG]: {
    path: getRouteCreateTag(),
    element: <CreateTagPage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_EDIT_TAG]: {
    path: getRouteEditTag(':id'),
    element: <EditTagPage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_CATEGORIES]: {
    path: getRouteCategories(),
    element: <CategoriesPage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_CREATE_CATEGORY]: {
    path: getRouteCreateCategory(),
    element: <CreateCategoryPage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_EDIT_CATEGORY]: {
    path: getRouteEditCategory(':id'),
    element: <EditCategoryPage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_NOTES_TYPES]: {
    path: getRouteAdminNotesTypes(),
    element: <NotesTypesPage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_CREATE_NOTE_TYPE]: {
    path: getRouteAdminCreateNoteType(),
    element: <CreateNoteTypePage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_USERS]: {
    path: getRouteAdminUsers(),
    element: <UsersPage />,
    isAuth: true,
    isAdmin: true,
  },
  [AppRoutes.ADMIN_USER_EDIT]: {
    path: getRouteAdminEditUser(':email'),
    element: <UserEditPage />,
    isAuth: true,
    isAdmin: true,
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
  [AppRoutes.NOTE_EDIT]: {
    path: getRouteEditNote(':id'),
    element: <EditNotePage />,
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
