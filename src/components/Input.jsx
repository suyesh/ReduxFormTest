import React, { Fragment } from 'react';

const Input = (props) => {
  const { type, input, className } = props
  const { touched, error } = props.meta
  return(
    <Fragment>
      <input
        type={type}
        {...input}
        className={ className }
      />
      {touched && error && <div className="text-help">{error}</div>}
    </Fragment>
  )
}

export { Input }
