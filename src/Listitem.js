import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'


function Listitem({rout , ico, text}) {
  return (
    <ListItem disablePadding>
        <ListItemButton component = 'a' href= {rout}>
        <ListItemIcon>
            {ico}
        </ListItemIcon>
        <ListItemText primary={text} />
        </ListItemButton>
  </ListItem>
    )
}

export default Listitem