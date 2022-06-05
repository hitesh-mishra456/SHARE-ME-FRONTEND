import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Search from '../Search/Search';

import Navbar from '../Navbar/Navbar';
import Posts from '../Posts/Posts';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = ({currentId, setCurrentId,searchShow,setSearchShow}) => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [tags, setTags] = useState([]);
 
  return (
      <Container maxWidth="xl">
      <Navbar setCurrentId={setCurrentId} currentId={currentId} search={searchShow} setSearchShow={setSearchShow}/>
          {searchShow && <Search tags={tags} setTags={setTags}/>} 
            <Posts currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery && !tags.length) && (
              <Container className={classes.pagination}>
                <Pagination page={page} />
              </Container>
            )}
      </Container>
  );
};

export default Home;
