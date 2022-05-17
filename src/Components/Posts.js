import React from 'react'
import { MoreVert, Favorite, Share, FavoriteBorder  } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'

function Posts() {
  return (
    <Card sx={{marginBottom:'20px' , margin:{sm:1.25 , lg:3}}}> 
      <CardHeader
        avatar={
          <Avatar 
          alt="Trevor Henderson"
          src="https://i.ibb.co/kmjGHMk/mm.jpg"
          sx={{ bgcolor:red[700] }} aria-label="recipe">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Emad Hussien"
        subheader="May 16, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://media.istockphoto.com/photos/happy-family-with-kids-sit-on-couch-using-laptop-picture-id1215789535?k=20&m=1215789535&s=612x612&w=0&h=rLbgDdpsbBjBrjSA_zj3VtXEQQFjpRte1usHJutIfUY="
        alt="family"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
     
      </Card>
     


    )
}

export default Posts