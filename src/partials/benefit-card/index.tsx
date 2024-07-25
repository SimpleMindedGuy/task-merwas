'use client'
import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {

  image: string;
}

import { useInView } from "react-intersection-observer";
const BenefitCard = (props: Props) => {
  const { children, image } = props;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,

    rootMargin: '-50px'
  });
  return (

    <div className={`Card ${inView ? '' : 'hidden'}`} style={{ "backgroundImage": `url(${image})` }} ref={ref}>

      <div className="Card-Description">
        {children}
        <a href='#'>Learn more</a>
      </div>
    </div >
  )
}

export default BenefitCard
