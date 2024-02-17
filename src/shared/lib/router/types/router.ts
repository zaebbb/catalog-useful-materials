/**
 * @description Список доступных роутов для приложения
 * */
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  LOGIN = 'login',
  REGISTER = 'register',
  PROFILE = 'profile',
  CREATE_NOTE = 'create_note',
  ADMIN = 'admin',
  ADMIN_TAGS = 'admin_tags',
  ADMIN_CREATE_TAG = 'admin_create_tag',
  ADMIN_EDIT_TAG = 'admin_edit_tag',
  ADMIN_NOTES_TYPES = 'admin_notes_types',
  ADMIN_CREATE_NOTE_TYPE = 'admin_create_note_type',
  // ADMIN_EDIT_TAG = 'admin_edit_tag',
  ADMIN_CATEGORIES = 'admin_categories',
  ADMIN_CREATE_CATEGORY = 'admin_create_category',
  ADMIN_EDIT_CATEGORY = 'admin_edit_category',
  ADMIN_USERS = 'admin_users',
  ADMIN_USER_EDIT = 'admin_user_edit',
  NOTE_DETAILS = 'note_details',
  NOTE_EDIT = 'note_edit',
  USER_NOTES = 'user_notes',
  PRIVACY = 'privacy',
  SITEMAP = 'sitemap',
  LOGOUT = 'logout',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found'
}
