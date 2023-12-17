import { type Additional, classNames } from '@lib/helpers/classNames'
import { stringToHTML } from '@lib/helpers/stringToHTML'
import prism from 'prismjs'
import React, { memo } from 'react'
import cls from './Code.module.scss'
import 'prismjs/themes/prism-tomorrow.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/autolinker/prism-autolinker'
import 'prismjs/plugins/autolinker/prism-autolinker.css'
import 'prismjs/plugins/inline-color/prism-inline-color'
import 'prismjs/plugins/inline-color/prism-inline-color.css'

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
    prism.highlightAll()
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
