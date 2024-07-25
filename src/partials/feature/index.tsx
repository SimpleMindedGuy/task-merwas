import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React, { HTMLAttributes } from 'react'


interface Props extends HTMLAttributes<HTMLElement> {
  Header?: React.ReactNode;
  Icon?: null | React.ReactNode;
}

const Feature = (props: Props) => {
  const { Header, Icon, children } = props;
  return (
    <section className="Feature">
      <div className="Feature-Header">
        <div className="Feature-Icon">
          {Icon}
        </div>
        <h4>
          {Header}
        </h4>
      </div>
      <div className="Feature-Description">
        {children}
      </div>
    </section>
  )
}

export default Feature
