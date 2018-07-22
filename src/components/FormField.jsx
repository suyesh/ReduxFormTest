import React from 'react'
import { Field } from 'redux-form'
import { Input, InputLabel, FormGroup } from './index'

const FormField = ({ label, type, name }) =>
  <FormGroup>
    <InputLabel name={label}/>
    <Field
      name={name}
      component={Input}
      type={type}
      className="form-control"
    />
  </FormGroup>


export { FormField }
