import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Load() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '200px' }}>
      <CircularProgress color='inherit'/>
    </Box>
  );
}
