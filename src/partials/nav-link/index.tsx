import React from 'react'

type Props = {
  header: string;
}

const NavLink = (props: Props) => {
  const { header } = props;
  return (
    <div className="Nav-Link">
      <div className="Nav-Link-Idicator"></div>
      <a href={`#${header}`}>{header}</a>
    </div>
  )
}

export default NavLink
