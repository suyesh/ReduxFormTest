import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from './PostsActions'

class _ShowPost extends Component {
  componentDidMount = () => {
    if (!this.props.post) {
      const { params: { id }} = this.props.match
      this.props.fetchPost(id)
    }
  }

  onDeleteClick = () => {
    const { params: { id }} = this.props.match
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render(){
    const { post } = this.props
    if (!post) {
      return <div>Loading...</div>
    }
    return(
      <Fragment>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}>
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </Fragment>
    )
  }
}

const actions = {
  fetchPost,
  deletePost
}

const mapStateToProps = ({ posts }, { match: { params: { id }} }) => ({
  post: posts[id]
})

const ShowPost = connect(mapStateToProps, actions)(_ShowPost)

export { ShowPost }
