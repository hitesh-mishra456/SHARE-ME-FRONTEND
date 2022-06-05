import React from "react";
import {Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import BrandHeading from '../BrandHeading/BrandHeading';

const SidebarSignIn = ({isSignup}) =>{
    const classes = useStyles();
    return (
        <Container className={isSignup?classes.backgroundSignUp:classes.backgroundSignIn} component="main" maxWidth="lg">
           <Container className={classes.logoName}>
                <BrandHeading />   
                <Typography variant="h4" className={classes.subHeading}>Discover the world's top Designers and Creatives</Typography>
           </Container>        
        </Container>
    );
};

export default SidebarSignIn;