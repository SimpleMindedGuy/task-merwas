
import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {

}

import partner from "@/partials/img/partner.png"
const PartnerCard = (props: Props) => {
  const { children } = props;
  return (

    <div className="Card Partner">

      <div className="Partner-Image" style={{ 'backgroundImage': `url(${partner.src})` }}>

      </div>
      <p>Agreement between xyz and ourwebsite</p>
      <div className="Card-Heighlight"></div>
    </div>
  )
}

export default PartnerCard
