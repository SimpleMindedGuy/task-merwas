import React from 'react'
import NavLink from '../nav-link'
type Props = {}

const NavLinks = (props: Props) => {
  return (

    <div className="Nav-Links">
      <NavLink header='Home' />
      <NavLink header='About Us' />
      <NavLink header='Services' />
      <NavLink header='Partners' />
      <NavLink header='Contact Us' />
    </div>
  )
}

export default NavLinks
