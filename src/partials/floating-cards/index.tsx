import React from 'react'
import F1 from '@/partials/img/floating1.png'
import F2 from '@/partials/img/floating2.png'
import F3 from '@/partials/img/floating3.png'

type Props = {}

const FloatingCards = (props: Props) => {
  return (

    <div className="Floating-Image-Cards">
      <div className="Floating-Image-Card" style={{ "backgroundImage": `url(${F3.src})` }} ></div>
      <div className="Floating-Image-Card" style={{ "backgroundImage": `url(${F2.src})` }}></div>
      <div className="Floating-Image-Card" style={{ "backgroundImage": `url(${F1.src})` }}></div>
    </div>
  )
}

export default FloatingCards
