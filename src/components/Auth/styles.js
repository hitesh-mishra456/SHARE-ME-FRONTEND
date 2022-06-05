import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  mainContainer:{
     marginLeft:'-5%'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  backgroundSignIn:{
     backgroundColor:'#f2d184',
     height:'150%',
     marginTop:'-1.8%'
  },
  backgroundSignUp:{
    backgroundColor:'#f1cdd7',
    height:'150%',
    marginTop:'-1.8%'
 },
  input:{
     width:'60%',
     marginLeft:'20%',
  },
  firstName:{
    width:'60%',
     marginLeft:'40%',
  },
  lastName:{
     width:'60%'
  },
  SignInHeading:{
     paddingLeft:'20%',
     marginBottom:'6%',
     fontWeight:'bold',
     fontSize:'1.7rem'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    marginLeft:'30%',
    marginTop:'14%'
  },
  logoName:{
    paddingTop:'18%',
    marginLeft:'3%',
    // color:'#866118',
    // fontFamily:"'Haas Grot Text R Web','Helvetica Neue','Helvetica','Arial','sans-serif''"
  },
  subHeading:{
    color:'#866118',
    fontWeight:'bold',
    fontSize:'1.7rem',
    paddingTop:'5%',
    paddingLeft:'3%'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width:'40%',
    marginLeft:'20%',
    backgroundColor:'#ea4c89',
    color:'#fff'
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    width:'60%',
    marginLeft:'20%'
  },
}));
