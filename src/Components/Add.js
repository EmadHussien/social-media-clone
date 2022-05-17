import { Avatar, Button, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import {Add as AddIcon, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import { Box } from '@mui/material'

function Add() {
    const StyledModal = styled(Modal)({
        display: 'flex', 
        justifyContent:'center' ,
        alignItems:'center'
    }) 
    const UserBox = styled(Box)({
        display: 'flex', 
        alignItems:'center' , 
        gap:'10px',
        margin: '5px 0 20px 0',
        letterSpacing:'-1px'

    })
  
  const [open,setOpen] = React.useState(false);
  return (
    <>
        <Tooltip 
        onClick={e=>setOpen(true)}
        title="Add" 
        sx={{ position:'fixed', bottom:20 , left:{xs:'calc(50% - 25px)' ,md:30} }}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>

        <StyledModal
            open={open}
            onClose= {e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280}  p={3} sx={{margin:{xs:'5px', sm:'0px'}}} borderRadius = {5} bgcolor='background.default' color={'text.primary'}
            >
                <Typography variant='h6' color={'gray'} textAlign='center'>Create post</Typography>
                <UserBox>
                    <Avatar sx = {{width:'30px', height:'30px'}}  alt="Emad Hussien" src="https://i.ibb.co/kmjGHMk/mm.jpg" />
                    <Typography variant='span' fontWeight={500}>Emad Huessien</Typography> 
                </UserBox>
                <TextField
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    sx={{width:'100%'}}
                    placeholder ="What's on your mind?"
                    variant="standard"
                />
                <Stack direction='row' gap={1} mt={2} mb={3}>
                    <EmojiEmotions color='primary' />
                    <Image color='secondary'/>
                    <VideoCameraBack color='success'/>
                    <PersonAdd color='error'/>
                </Stack>
                <Button fullWidth variant="contained">Post</Button>

            </Box>
        </StyledModal>
    </>
  
  
)}

export default Add