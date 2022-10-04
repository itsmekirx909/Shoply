import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function Cards(props) {
  let {title, src, location, price, id} = props
  return (
    <Card onClick={props.func} key={id} className={props.class} sx={{ maxWidth: 345, height: 250, width: 250 }}>
      <CardActionArea>
        <CardMedia
        key={id}
        sx={{height: 100, width: 100, margin: '0px auto'}}
          component="img"
          height="140"
          image={src}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" fontSize='small' key={id} component="div">
          {title}
          </Typography>
          <Typography variant="body2" fontSize='0.8rem' key={id} color="text.secondary">
          {location}
          </Typography>
          <Typography variant="body2" fontWeight='bold' key={id} color="text.secondary">
          Price: {price}Rs
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

