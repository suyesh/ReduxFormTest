import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Posts, NewPost, ShowPost } from '../containers/Posts'

const AppRoutes = ()=> (
  <Fragment>
    <Switch>
      <Route path="/posts/new" component={NewPost}/>
      <Route path="/posts/:id" component={ShowPost}/>
      <Route path="/" component={Posts} exact/>
    </Switch>
  </Fragment>
)

export default AppRoutes
