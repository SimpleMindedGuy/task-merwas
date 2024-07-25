import Feature from '@/partials/feature'
import Grid from '@/partials/Grid'
import SectionHeader from '@/partials/section-header'
import React from 'react'

import RocketIcon from '@/partials/icons/rocket'
import Target from '@/partials/icons/target'
import IdeaIcon from '@/partials/icons/idea'
import VisionIcon from '@/partials/icons/vision'
import about from '@/partials/img/about.png'
type Props = {}

const About = (props: Props) => {
  return (

    <section className={"About-Section"}>
      <SectionHeader >
        <h3>About Us</h3>
        <br />
        <p>With lots of unique blocks, you can easily build a page easily without any coding.</p>
      </SectionHeader>

      <div className="About-Content">

        <section className="About-Features">

          <div className="About-Features-Header">
            <h4>OurWebsite</h4>
            <p>We offer more than just a workspace</p>
          </div>
          <Grid >
            <Feature Icon={<RocketIcon />} Header={"Fostering Collaboration"}>
              <p>Encouraging synergy among different entities in the technology ecosystem, includingstartups, freelancers, compaes, academia, and government</p>
            </Feature>

            <Feature Icon={<IdeaIcon />} Header={"Promoting Innovation"}>
              <p>By providing support and guidance/training, the center aims to cultivate an environment where new ideas and innovative solutions can thrive</p>
            </Feature>

            <Feature Icon={<Target />} Header={" Mission Statement"}>
              <p>A technological revolution in East amman through fostering innovation, collaboration, education, and community growth</p>
            </Feature>
            <Feature Icon={<VisionIcon />} Header={"Vision Statement"}>
              <p>Establishing a leading technological hub as a catalyst for technological advancement and social development in East amman</p>
            </Feature>
          </Grid>
        </section>
        <div className="About-Image">
          <div style={{ "backgroundImage": `url(${about.src})` }} >
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
