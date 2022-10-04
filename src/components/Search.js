import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import Products from './Products';


let b

export default function Search(props) {


  return (
    
    <Stack className='search' spacing={2} sx={{ width: 500,borderTopRightRadius: 0,borderBottomRightRadius: 0}}>
      <Autocomplete 
      onChange={(x,y,z)=>{ props.setsearch(y)}}
      freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={prods.map((option) => option)}
        renderInput={(params) => (
          <TextField
          variant='outlined'
          {...params}
            label="Search Products"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
    
  );
}

let prods = Products().map((x)=> x.title)


