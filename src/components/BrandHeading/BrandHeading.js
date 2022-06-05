import React from "react";
import { Link} from 'react-router-dom';
import brandlogo from '../../images/Brandlogo.jpg';
import useStyles from './styles';

const BrandHeading = () =>{
    const classes=useStyles();
    return (
        <Link to="/" className={classes.brandContainer} >
          <img component={Link} to="/" src={brandlogo} className={classes.brandName} alt="icon" height="45px" />
        </Link>
    );
};

export default BrandHeading;