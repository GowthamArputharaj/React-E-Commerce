import React from 'react';


// Material UI Components
import { makeStyles } from '@material-ui/core/styles';


// React Componoentns
import Address from './Address';

// Images



const useStyles = makeStyles((theme) => ({
  Addresses: {
    width: '85vw',
    margin: 'auto',
  },
  Address: {
    
  }
}));


const Addresses = (props) => {

  const classes = useStyles();

  document.querySelector('body').classList.remove('stop_scrolling');

  return (
    <div>
      <div className={classes.Addresses}>
        <Address className={classes.Address} />
        <Address className={classes.Address} />
      </div>
    </div>
  )
}


export default Addresses;





