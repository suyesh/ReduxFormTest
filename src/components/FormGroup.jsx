import React from 'react'

const FormGroup = ({ className, children }) =>
  <div className={`form-group ${className ? className : ''}`}>
    { children }
  </div>

export { FormGroup }
