import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  ItemSize?: number;


}

const Grid = (props: Props) => {
  const { ItemSize, children } = props
  return (

    <div className="Grid"
      style={{ "--Grid-Item-Size": `${ItemSize}px` } as any}
    >
      {children}
    </div>
  )
}

export default Grid
