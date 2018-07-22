import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ containerClass, buttonClass, to, buttonText  }) =>
    <div className={containerClass}>
      <Link className={buttonClass} to={to}>
        { buttonText }
      </Link>
    </div>

export { LinkButton }
