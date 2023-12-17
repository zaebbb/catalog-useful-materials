import DOMPurify from 'dompurify'
import parse from 'html-react-parser'
import type React from 'react'

export const stringToHTML = (text: string): React.ReactNode => {
  const xssClearString = DOMPurify
    .sanitize(text, {
      USE_PROFILES: {
        html: true,
      },
    })

  return parse(xssClearString)
}
