import React from 'react'
import NavLink from '@/partials/nav-link'
import NavLinks from '@/partials/nav-links'
import Socials from '@/partials/socials'
import logo from '@/partials/img/logo.png'
type Props = {}

const NavBar = (props: Props) => {
  return (

    <nav className="Nav-Bar">
      <section className="Nav-Socials">
        <Socials />
      </section>
      <section className="Navigation">
        <div className="Nav-Logo">
          <img src={logo.src} />
        </div>
        <NavLinks>

        </NavLinks>
        <div className="Nav-Options">
          <div>
            <button >
              Register
            </button>
            <button className="Primary-Button">
              Login
            </button>


          </div>
        </div>
      </section>
    </nav>
  )
}

export default NavBar
