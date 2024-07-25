import SectionHeader from '@/partials/section-header'
import Service from '@/partials/service'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (

    <section className="Service-Section">

      <SectionHeader >
        <h3>Services</h3>
        <br />
        <p>With lots of unique blocks, you can easily build a page easily without any coding.</p>
      </SectionHeader>

      <Service>
        <h4>Coworking Spaces</h4>
        <p>Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity</p>
      </Service>

      <Service >
        <h4>Mentoring and Training</h4>
        <p>Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project</p>
      </Service>

      <Service>
        <h4>Coworking Spaces</h4>
        <p>Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity</p>
      </Service>

      <Service >
        <h4>Mentoring and Training</h4>
        <p>Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project</p>
      </Service>
    </section>
  )
}

export default Services
