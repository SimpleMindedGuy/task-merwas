'use client'
import React, { HTMLAttributes } from 'react'
import FloatingCards from '../floating-cards'
import SectionContent from '../section-content'
import { useInView } from "react-intersection-observer";

interface Props extends HTMLAttributes<HTMLElement> { }

const Service = (props: Props) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,

    rootMargin: '-50px'
  });
  const { children } = props;


  return (

    <div className={`Service ${inView ? '' : 'hidden'}`} ref={ref}>

      <FloatingCards />

      <SectionContent>
        {children}
      </SectionContent>
    </div>
  )
}


export default Service;
