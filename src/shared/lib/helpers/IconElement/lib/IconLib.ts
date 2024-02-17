/* eslint-disable max-len */
import React from 'react'
import { type IconLibOptions } from '../types/IconElement'

/**
 * @type IconLibOptions
 * @description Список с наименованиями иконок и в качестве значения lazy подгруженные иконки
 * */
export const IconLib: IconLibOptions = {
  IconFaBeer: React.lazy(async () => await import('./icons/IconFaBeer')),
  IconInfoCircleOutline: React.lazy(async () => await import('./icons/IconInfoCircleOutline')),
  IconSuccessCircleOutline: React.lazy(async () => await import('./icons/IconSuccessCircleOutline')),
  IconEyeViewOutline: React.lazy(async () => await import('./icons/IconEyeViewOutline')),
  IconEyeNotViewOutline: React.lazy(async () => await import('./icons/IconEyeNotViewOutline')),
  IconArrowDownNoLine: React.lazy(async () => await import('./icons/IconArrowDownNoLine')),
  IconArrowLeftNoLine: React.lazy(async () => await import('./icons/IconArrowLeftNoLine')),
  IconArrowRightNoLine: React.lazy(async () => await import('./icons/IconArrowRightNoLine')),
  IconArrowDownLine: React.lazy(async () => await import('./icons/IconArrowDownLine')),
  IconUser: React.lazy(async () => await import('./icons/IconUser')),
  IconUsers: React.lazy(async () => await import('./icons/IconUsers')),
  IconLang: React.lazy(async () => await import('./icons/IconLang')),
  IconLoadLocal: React.lazy(async () => await import('./icons/IconLoadLocal')),
  IconExitOutline: React.lazy(async () => await import('./icons/IconExitOutline')),
  IconCloseOutline: React.lazy(async () => await import('./icons/IconCloseOutline')),
  IconPlusOutline: React.lazy(async () => await import('./icons/IconPlusOutline')),
  IconSuccessOutline: React.lazy(async () => await import('./icons/IconSuccessOutline')),
  IconDelete: React.lazy(async () => await import('./icons/IconDelete')),
  IconEditOutline: React.lazy(async () => await import('./icons/IconEditOutline')),
  IconPlayFill: React.lazy(async () => await import('./icons/IconPlayFill')),
  IconPauseFill: React.lazy(async () => await import('./icons/IconPauseFill')),
  IconScreenFull: React.lazy(async () => await import('./icons/IconScreenFull')),
  IconScreenNormal: React.lazy(async () => await import('./icons/IconScreenNormal')),
  IconVolumeFill: React.lazy(async () => await import('./icons/IconVolumeFill')),
  IconVolumeDisableFill: React.lazy(async () => await import('./icons/IconVolumeDisableFill')),
  IconDocumentOutline: React.lazy(async () => await import('./icons/IconDocumentOutline')),
  IconLogoVK: React.lazy(async () => await import('./icons/IconLogoVK')),
  IconAdmin: React.lazy(async () => await import('./icons/IconAdmin')),
  IconTag: React.lazy(async () => await import('./icons/IconTag')),
  IconCategoryOutline: React.lazy(async () => await import('./icons/IconCategoryOutline')),
  IconNoteTypeOutline: React.lazy(async () => await import('./icons/IconNoteTypeOutline')),
}
