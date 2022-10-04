import './App.css';
import Search from './components/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Cards from './components/Cards';
import Modals from './components/Modals';
import Products from './components/Products';
import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import DiamondIcon from '@mui/icons-material/Diamond';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Tooltip from '@mui/material/Tooltip';
import Load from './components/Load'

let all;

function App() {
  let [allprods, setallprods] = useState(Products())
  let [loader,setloader] = useState(null)

function filter(e){

  setallprods([])

  setloader(<Load/>)

  setTimeout(() => {
  setloader(null)
    
  
  if(e !== 'show all'){
    setallprods(Products().filter((x)=> x.category == e))
  }
  else{
    setallprods(Products().map((x)=> x))
  }
}, 2000);
}



  // function searches(){
  //   console.log(search)
  // }

  return (
    <div className="App">

      <div className='navbar'>
        <a className='link' href='index.html'>
<ShoppingCartIcon fontSize='large'/> 
<h3 className='hl'>Shoply</h3>
</a>

{/* <Search/>
<Button btn='searchbtn' color='inherit' variant='outlined' sx={{height: 55}}><SearchIcon/></Button> */}
</div>

<Grid>
<Tooltip title='Show All' placement='top'>
    <StorefrontIcon className='icons' onClick={()=>{filter("show all")}} />
</Tooltip>

<Tooltip title="Men's clothing" placement='top'>
    <ManIcon className='icons' onClick={()=>{filter("men's clothing")}} />
</Tooltip>

<Tooltip title="Women's clothing" placement='top'>
    <WomanIcon className='icons' onClick={()=>{filter("women's clothing")}} />
</Tooltip>

<Tooltip title='Jewelry' placement='top'>
    <DiamondIcon className='icons' onClick={()=>{filter('jewelry')}} />
</Tooltip>

<Tooltip title='Electronics' placement='top'>
    <ElectricBoltIcon className='icons' onClick={()=>{filter('electronics')}} />
</Tooltip>

</Grid>


<h1>Products</h1>

<div>{loader}</div>

<Grid container className='center' spacing={2}>
{allprods.map((x, i)=> {

  return <Modals keys={x.id} title={x.title} src={x.image} location={x.location} price={x.price}/>
}
)}

</Grid>
    </div>


  );
}

export default App;
