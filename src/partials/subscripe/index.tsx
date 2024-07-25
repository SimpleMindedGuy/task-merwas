'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type Props = {}

function Subscribe({ }: Props) {

  const [isActive, setActive] = React.useState<boolean>(false)

  function toggleButton() {
    setActive(prev => !prev)
  }
  return (
    <div className='Subscripe'>
      <input type='text' placeholder='Enter Email' />
      <button className={`${isActive ? "Active" : " "}`} onClick={toggleButton}>
        <p>Subscribe</p>
        <FontAwesomeIcon icon={faCheck} className='icon' />
      </button>

    </div >
  )
}

export default Subscribe
