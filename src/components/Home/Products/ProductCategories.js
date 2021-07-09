import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// React Componenets
import ProductCategory from './ProductCategory';

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

function ProductCategories() {
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <div style={{ marginTop: '2rem', marginBottom: '8.5vh'}}>
     <ProductCategory></ProductCategory><hr></hr>
     <ProductCategory></ProductCategory>
    </div>
  );
}


export default ProductCategories;