import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
type Props = {}

const Socials = (props: Props) => {
  return (
    <div className="Socials">
      <div className='Social-Icon'>
        <FontAwesomeIcon icon={faFacebookF} size='sm' className='Feature-Icon' />
      </div>
      <div className='Social-Icon'>
        <FontAwesomeIcon icon={faTwitter} size='sm' className='Feature-Icon' />
      </div>
      <div className='Social-Icon'>
        <FontAwesomeIcon icon={faInstagram} size='sm' className='Feature-Icon' />
      </div>

      <div className='Social-Icon'>
        <FontAwesomeIcon icon={faLinkedin} size='sm' className='Feature-Icon' />
      </div>
      <div className='Social-Icon'>
        <FontAwesomeIcon icon={faSkype} size='sm' className='Feature-Icon' />
      </div>
    </div>
  )
}

export default Socials
