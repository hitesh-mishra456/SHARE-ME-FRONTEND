import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(user);
  const [currentId, setCurrentId] = useState(0);
  const [searchShow, setSearchShow] = useState(false);
  return (
    <BrowserRouter>
      <Container maxWidth="xl">

        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact render={()=><Home currentId={currentId} setCurrentId={setCurrentId} searchShow={searchShow} setSearchShow={setSearchShow}/>} />
          <Route path="/posts/search" exact render={()=><Home currentId={currentId} setCurrentId={setCurrentId} searchShow={searchShow} setSearchShow={setSearchShow}/>} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/createPost" exact 
          render={() =>
           <Form currentId={currentId} setCurrentId={setCurrentId}/>} 
           />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
