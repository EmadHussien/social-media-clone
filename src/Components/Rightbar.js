import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: {xs:'none' , md:'block'}, marginLeft:{md:'0px !important', lg:'16px !important'} }}>
      <Box position='fixed' sx={{width:{md:'285px', lg:'350px'}}} >
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={6} sx={{justifyContent:'flex-end'}}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-5704720.jpg&fm=jpg" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?cs=srgb&dl=pexels-katie-e-3671083.jpg&fm=jpg" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?cs=srgb&dl=pexels-grisha-chernigowsky-3981337.jpg&fm=jpg" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>

        <ImageList cols={3} rowHeight={100} gap = {5} sx={{overflow:'hidden'}}>
        <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/10007531/pexels-photo-10007531.jpeg?w=164&h=164&fit=crop&auto=format`}
              alt='img'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/10406808/pexels-photo-10406808.jpeg?w=164&h=164&fit=crop&auto=format`}
              alt='img'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/8851510/pexels-photo-8851510.jpeg?w=164&h=164&fit=crop&auto=format`}
              alt='img'
              loading="lazy"
            />
          </ImageListItem>          
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start" sx= {{paddingLeft:0}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" sx= {{paddingLeft:0}}>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?cs=srgb&dl=pexels-katie-e-3671083.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" sx= {{paddingLeft:0}}>
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?cs=srgb&dl=pexels-grisha-chernigowsky-3981337.jpg&fm=jpg"/>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default Rightbar