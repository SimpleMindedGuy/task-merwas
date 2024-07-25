import BenefitCard from '@/partials/benefit-card'
import Grid from '@/partials/Grid'
import SectionHeader from '@/partials/section-header'
import ShowcaseSection from '@/partials/showcase-section'
import React from 'react'

import B1 from "@/partials/img/benefit1.png"
import B2 from "@/partials/img/benefit2.png"
import B3 from "@/partials/img/benefit3.png"
import B4 from "@/partials/img/benefit4.png"

type Props = {}

const Intro = (props: Props) => {
  return (

    <section className={"Intro"}>
      <SectionHeader >
        <p>At The OurWebsite, we are dedicated to helping you excel in the world of technology.</p>
        <br />
        <p>Our services are specifically designed to meet your needs </p>
      </SectionHeader>

      <section className="Card-Section">
        <Grid ItemSize={350}>
          <BenefitCard image={B1.src}>
            <h4>Coworking Spaces</h4>
            <p>Inspiring Work Environments Designed for Technological Innovation</p>
          </BenefitCard>

          <BenefitCard image={B2.src}>
            <h4>Mentoring and Training</h4>
            <p>Gain Insights from Industry Experts to Boost Your Success</p>
          </BenefitCard>

          <BenefitCard image={B3.src}>
            <h4>Access to Funding and Markets</h4>
            <p>Unlock Financing Opportunities and Expand Your Impact</p>
          </BenefitCard>

          <BenefitCard image={B4.src}>
            <h4>Networking Opportunities</h4>
            <p>Connect with like-minded technology enthusiasts and industry leaders</p>
          </BenefitCard>
        </Grid>
      </section>

      <ShowcaseSection >
        <p>
          <b>OurWebsite</b> Your Gateway to Technological Excellence
        </p>
        <p>
          Get a quick glimpse into thedynamic environment at The OurWebsite and the benefits that await you
        </p>
      </ShowcaseSection>
    </section>
  )
}

export default Intro
