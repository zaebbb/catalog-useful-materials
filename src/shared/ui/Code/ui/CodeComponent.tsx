import { type Additional, classNames } from '@lib/helpers/classNames'
import { stringToHTML } from '@lib/helpers/stringToHTML'
import hljs from 'highlight.js'
import React, { memo } from 'react'
import cls from './Code.module.scss'
import 'highlight.js/scss/atom-one-dark.scss'

interface CodeProps {
  className?: string
  code?: string
}

const CodeComponent: React.FC<CodeProps> = memo((props: CodeProps) => {
  const {
    className,
    code,
  } = props

  React.useEffect(() => {
    hljs.highlightAll()
  }, [])

  const additional: Additional = [
    className,
    'line-numbers',
  ]

  return (
    <div className={classNames(cls.Code, {}, additional)}>
      {stringToHTML(code ?? '')}
    </div>
  )
})

export default CodeComponent
