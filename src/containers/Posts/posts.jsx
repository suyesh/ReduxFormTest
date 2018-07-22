 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { Link } from 'react-router-dom'
 import { fetchPosts } from './PostsActions'
 import {
   LinkButton,
   Heading,
   ListGroup,
   Container,
   ListGroupItem,
   MapHelper
 } from '../../components'

class _Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts = () =>
      <MapHelper
        data={this.props.posts}
        callback={this.renderPost}
      />

  renderPost = post =>
      <ListGroupItem
        key={post.id}
        item={<Link to={`/posts/${post.id}`}>{post.title}</Link>}
        className="list-group-item"
      />

  render(){
    return(
      <Container>
        <LinkButton
          containerClass="text-xs-right"
          buttonClass="btn btn-primary"
          to="/posts/new"
          buttonText="Add a Post"
        />
        <Heading text="Posts"/>
        <ListGroup list={this.renderPosts()} className="list-group"/>
      </Container>
    )
  }
}


const actions = {
  fetchPosts
}

const mapStateToProps = ({ posts }) => ({
  posts
})

const Posts = connect(mapStateToProps, actions)(_Posts)

export { Posts }
