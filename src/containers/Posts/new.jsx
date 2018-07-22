import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import { Link } from 'react-router-dom'
import { Container, FormField, Button} from '../../components'

class _NewPost extends Component {
  onSubmit = (values) => {
    console.log(values)
  }

  render(){
    const { invalid, submitting, pristine, handleSubmit } = this.props
    return(
      <Container>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <FormField
            label="Title"
            name="title"
            type="text"
          />
          <FormField
            label="Categories"
            name="categories"
            type="text"
          />
          <FormField
            label="Content"
            name="content"
            type="text"
          />
        <Button
          type="submit"
          className="btn btn-primary"
          text="Submit"
          disabled={invalid || submitting || pristine }
        />
        <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </Container>
    )
  }
}

const validate = combineValidators({
  title: composeValidators(
    isRequired({message: 'Title cannot be empty'}),
    hasLengthGreaterThan(5)({ message: 'Title length must be greater than 5'})
  )(),
  categories: isRequired({message: 'Please provide a category'}),
  content: composeValidators(
    isRequired({message: 'Please provide some content'}),
    hasLengthGreaterThan(50)({message: 'Content length must be greater than 50'})
  )()
})

const NewPost = reduxForm({
  validate,
  form: 'PostsNewForm'
})(_NewPost)

export { NewPost }
