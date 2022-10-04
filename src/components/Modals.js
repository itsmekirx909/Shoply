import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cards from './Cards';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: 345
};


export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let {title, src, location, price, id} = props

  return (
    <div>
      <Cards class='hov' sx={{top: 50, left: 50}} func={handleOpen} title={title} src={src} location={location} price={price} id={id}/>
      <Modal
      key={id}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} key={id}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Cards class='center2' title={title} src={src} location={location} price={price} id={id}/>
          </Typography>

<div className='center' key={id}>
    <Tooltip key={id} title='Add to Favourites' placement='top'>
<IconButton key={id} aria-label="add to favorites" id='fav'>
           <FavoriteIcon key={id}/>
  </IconButton>
    </Tooltip>

<Tooltip key={id} title='Add to Cart' placement='top'>
  <IconButton key={id} aria-label="add to cart" id='cart'>
          <AddShoppingCartIcon key={id}/>
  </IconButton>
</Tooltip>

    </div>
    <Button key={id} className='close' onClick={handleClose}>Close</Button>


        </Box>
      </Modal>
    </div>
  );
}
