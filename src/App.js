import React from 'react';
import './App.css';
import MyEditor from "./Comp/MyEditor";
import {Box} from "@mui/material";


function App() {
  return (
      <Box
          sx={{
              height: '100eh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
          }}
      >
          <Box>
              Header
          </Box>
          <Box sx={{ flexGrow: 1}}>
              <MyEditor/>
          </Box>
          <Box>
              Footer
          </Box>
      </Box>
  )
}

export default App;
