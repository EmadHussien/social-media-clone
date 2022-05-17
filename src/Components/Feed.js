
import { Box } from '@mui/material'
import React from 'react'
import Post from './Posts'
function Feed() {
  return (
    <Box
      flex={4} p={2} sx={{marginLeft: {xs: '0px !important' , sm:'16px !important'} }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
     </Box>
  )
}

export default Feed