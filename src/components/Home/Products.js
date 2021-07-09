import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';


// React Componenets
import ProductCategories from './Products/ProductCategories';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

function Products() {
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <ProductCategories></ProductCategories>
  );
}


export default Products;