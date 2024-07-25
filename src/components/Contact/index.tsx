import Feature from '@/partials/feature'
import Grid from '@/partials/Grid'
import SectionHeader from '@/partials/section-header'
import Socials from '@/partials/socials'
import React from 'react'
import Input from '@/partials/input'


import mapImage from '@/partials/img/map.png'
import Write from '@/partials/icons/write'
import Share from '@/partials/icons/share'
import Location from '@/partials/icons/location'
import Clock from '@/partials/icons/clock'
import Phone from '@/partials/icons/phone'

type Props = {}

const Contact = (props: Props) => {
  return (

    <section className="Contact-Section">

      <SectionHeader >
        <h3>Contact Us</h3>
        <p>With lots of unique blocks, you can easily build a page easily without any coding.</p>
        <h4>Get in touch today!</h4>
      </SectionHeader>

      <div className="Contact-Content">
        <section className="Contact-Details">
          <h4>Contact Details</h4>
          <Grid ItemSize={220}>
            <Feature Icon={<Location />} Header={"Find Us"}>
              <p>2301 AMMAN . JORDAN</p>
            </Feature>

            <Feature Icon={<Phone />} Header={"Phone"}>
              <p>+ (06) 111-1111</p>
              <p>+ (06) 111-1111</p>
            </Feature>

            <Feature Icon={<Clock />} Header={"Working Hours"}>
              <p>Mon-Fri: 8 AM - 5 PM</p>
              <p>Sat-Sun: 8 AM - 2 PM</p>
            </Feature>
            <Feature Icon={<Write />} Header={"Write to Us"}>
              <p>info@ourwebsite.com</p>
              <p>courses@ourwebsite.com</p>
            </Feature>

            <Feature Icon={<Share />} Header={"Follow Us"}>
              <Socials></Socials>
            </Feature>
          </Grid>

        </section>

        <section className="Contact-Message">

          <h4>Have A Question ? </h4>

          <div className="Message-Details">

            <Input name={"Types"} type={"select"}></Input>

            <div>
              <Input name={"Name"} optional type={"text"} />
              <Input name={"Email"} optional type={"text"} />
            </div>

            <Input name={"Message"} type={"textarea"} ></Input>

          </div>
          <button className="Primary-Button">SEND</button>
        </section>


      </div>

      <div className="Contact-Map" id='Contact Us'>
        <img src={mapImage.src} />
      </div>

    </section>
  )
}

export default Contact
