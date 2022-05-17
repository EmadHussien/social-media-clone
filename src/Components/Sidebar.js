import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { ModeNight } from '@mui/icons-material';
import Listitem from '../Listitem';


function Sidebar({setMode,mode}) {
  return (
    <Box 
      flex={1} 
      p={2} 
      sx={{ display:{xs:'none' , sm:'block'}} }>
      <Box position='fixed'>

        <List>

          <Listitem rout = '#home' ico = {<HomeIcon />} text = 'Homepage' />
          <Listitem rout = '#pages' ico = {<ArticleIcon />} text = 'Pages' />
          <Listitem rout = '#groups' ico = {<GroupsIcon />} text = 'Groups' />
          <Listitem rout = '#market' ico = {<StorefrontIcon />} text = 'Marketplace' />
          <Listitem rout = '#friends' ico = {<PersonIcon />} text = 'Friends' />
          <Listitem rout = '#settings' ico = {<SettingsIcon />} text = 'Settings' />
          <Listitem rout = '#profile' ico = {<AccountBoxIcon />} text = 'Profile' />
          <ListItem disablePadding>
            <ListItemButton component = 'a' href='#profile'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch 
                onChange={e=>setMode(mode==='light'? 'dark': 'light')}
              />
            </ListItemButton>
          </ListItem>
             
          </List>  
      </Box>
    </Box>

  )
}

export default Sidebar