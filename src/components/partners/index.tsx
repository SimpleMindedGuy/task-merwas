import Grid from '@/partials/Grid'
import PartnerCard from '@/partials/partner-card'
import SectionHeader from '@/partials/section-header'
import React from 'react'

type Props = {}

const Partners = (props: Props) => {
  return (

    <section className="Partners-Section">

      <SectionHeader >
        <h3>Partners</h3>
        <p>With lots of unique blocks, you can easily build a page easily without any coding.</p>
      </SectionHeader>

      <div className="Partners-Cards">

        <Grid ItemSize={300}>
          <PartnerCard></PartnerCard>
          <PartnerCard></PartnerCard>
          <PartnerCard></PartnerCard>
        </Grid>
      </div>
    </section>
  )
}

export default Partners
