import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBarSearch: {
        borderRadius: 10,
        marginBottom: '3rem',
        display: 'flex',
        flexDirection:'column',
        padding: '50px',
        backgroundColor:'#F1EEFB',
      },
      searchButton:{
        width:'50%',
        marginLeft:'25%'
      },
      heading:{
        marginBottom:'3%',
        fontSize:'2.5rem'
      }
}));