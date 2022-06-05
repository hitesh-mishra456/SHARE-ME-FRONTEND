import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import { CLIENT_ID } from '../../constants/client_id';
import SidebarSignIn from './SidebarSignIn';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => console.log(error);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="lg">
        <Grid container spacing={2}>
              <Grid item xs={5}>
                <SidebarSignIn isSignup={isSignup}/>
              </Grid>
              <Grid item xs={7}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h4" className={classes.SignInHeading}>{ isSignup ? 'Sign up to Vagary' : 'Sign in to Vagary' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    { isSignup && (
                    <>
                      <Input name="firstName" label="First Name" handleChange={handleChange}  autoFocus half />
                      <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                    </>
                    )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                  </Grid>
                  <Button type="submit" fullWidth variant="contained" className={classes.submit}>
                    { isSignup ? 'Sign Up' : 'Sign In' }
                  </Button>
                  <GoogleLogin
                    clientId={CLIENT_ID}
                    render={(renderProps) => (
                      <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                        Google Sign In
                      </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleError}
                    cookiePolicy="single_host_origin"
                  />
                  <Grid container className={classes.SignInHeading}>
                    <Grid item>
                      <Button onClick={switchMode}>
                        { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                      </Button>
                    </Grid>
                </Grid>
              </form>
              </Grid>
          </Grid>
    </Container>
  );
};

export default SignUp;
