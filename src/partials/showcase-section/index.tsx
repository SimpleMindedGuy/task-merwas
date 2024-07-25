import React, { HTMLAttributes } from 'react'
import video from "@/partials/img/video.png"

interface Props extends HTMLAttributes<HTMLElement> {

}

const ShowcaseSection = (props: Props) => {
  const { children } = props;
  return (

    <div className="Show-Case">

      <div className="Video-Card" style={{ "backgroundImage": `url(${video.src})` }}>

      </div>

      <article>
        {children}
      </article>

    </div>
  )
}

export default ShowcaseSection
