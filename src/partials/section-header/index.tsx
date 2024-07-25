import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> { }

const SectionHeader = (props: Props) => {
  const { children } = props;
  return (

    <article className="Section-Header">
      {children}
    </article>
  )
}

export default SectionHeader
