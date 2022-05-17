import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Mail, Notifications } from '@mui/icons-material';

function Navbar() {
  
const [menu,setMenu] = React.useState(false);


  const StyledToolBar = styled(Toolbar)({
    display:'flex' , 
    justifyContent : 'space-between' ,
  })

  const Search = styled("div") (({theme}) =>({
    backgroundColor : "white" , 
    padding : '0 10px' ,
    borderRadius: theme.shape.borderRadius,
    width : '40%' , 
  }))

  const Icons = styled("div") (({theme}) =>({
    display:'flex' ,
    gap:'20px' , 
    alignItems : 'center',
  }))

  const UserBox = styled(Box)(({theme}) =>({
    display:'flex' ,
    gap:'10px' , 
    alignItems : 'center',
  }))
  

  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{display : {xs : 'none' , sm: 'block' }}} >EMAD HUSSIEN</Typography>
        <LogoDevIcon  sx={{ display:{xs:'block' , sm: 'none'}, fontSize : '2.3rem' }} />
         <Search><InputBase placeholder='search...' /></Search>
        
         <Icons sx={{display:{xs:'none' , sm:'flex'}}}>
          <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={10} color="error">
              <Notifications />
            </Badge>
            <Avatar 
            onClick = {e => setMenu(true)}
            sx = {{width:'30px', height:'30px' , ":hover":{cursor:'pointer'}}}  alt="Emad Hussien" src="https://i.ibb.co/kmjGHMk/mm.jpg" />
         </Icons>

         <UserBox 
         onClick = {e => setMenu(true)}
         sx={{display:{xs:'flex' , sm:'none'},":hover":{cursor:'pointer'}}}>
            <Avatar sx = {{width:'30px', height:'30px'}}  alt="Emad Hussien" src="https://i.ibb.co/kmjGHMk/mm.jpg" />
            <Typography variant='span'>Emad</Typography>
         </UserBox>
         <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menu}
        onClose={e=> setMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ top:'35px' , left:'14px'}}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </StyledToolBar>
    </AppBar>
  )
}

export default Navbar