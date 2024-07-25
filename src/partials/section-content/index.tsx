import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> { }

const SectionContent = (props: Props) => {
  const { children } = props;
  return (
    <article>
      {children}
    </article>
  )
}

export default SectionContent
