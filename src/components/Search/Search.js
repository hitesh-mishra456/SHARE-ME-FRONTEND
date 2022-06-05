import React ,{useState} from "react";
import { Container,AppBar, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Search = ({tags,setTags}) => {
    const classes = useStyles();
  
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const history = useHistory();

    const searchPost = () => {
        if (search.trim() || tags) {
          dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
          history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
          history.push('/');
        }
      };
    
      const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
      };
    
      const handleAddChip = (tag) => setTags([...tags, tag]);
    
      const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

    return(
        <Container className={classes.appBarSearch}>
          <Typography variant="h3" className={classes.heading}>Search Stories By Name or Tags</Typography>
          <Grid container justify="space-between" alignItems="stretch" spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField 
                style={{ margin: '7px 0', background:'#fff'}} 
                onKeyDown={handleKeyPress} name="search" 
                variant="outlined" label="Search Posts" 
                fullWidth value={search} onChange={(e) => setSearch(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChipInput
                  style={{ margin: '7px 0' , backgroundColor:'#fff', width:'100%'}}
                  value={tags}
                  onAdd={(chip) => handleAddChip(chip)}
                  onDelete={(chip) => handleDeleteChip(chip)}
                  label="Search Tags"
                  variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </Grid>
          </Grid>
        </Container>
     );
};

export default Search;