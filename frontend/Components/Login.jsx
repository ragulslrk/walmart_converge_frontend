import React from 'react'
import '../assets/css/login.css'
import { Box, Grid, Stack, TextField } from '@mui/material'
import '../assets/css/login.css'
import loginimg from '../assets/img/1.png'
import Image from 'next/image'

const Login = () => {
    return (
        <div style={{marginBottom:"50%"}}>
            <Box id="logincard" >
            <Grid container spacing={2}>
            <Grid item sx={8}>
            <Box sx={{display:{sm:"block",xs:"none"}}}>
                
                <Image  src={loginimg} alt="img" width={455} />

                
                </Box>
            </Grid>
            <Grid item sx={4}>
            <h1 style={{textAlign:"center",paddingBottom:"20px",color:"black"}}>Login</h1>
                <Stack direction={'column'}>
                    <TextField sx={{width:"250px"}}  label="Username" placeholder='Enter your username'  multiline/>
                    <br />
                    <TextField   label="Password" placeholder='Enter your Password'  multiline />
                    <a><h5 id='sub' style={{marginLeft:"50%",fontWeight:"300",color:"black",padding:"10px 0px"}}>Forgot Password ?</h5></a>
                    <button id="btn">Login</button>
                    <a id='sub' style={{textAlign:"center",padding:"50px 0 0 0"}}><span>Create new account ?</span><span style={{color:"#e2b023"}}> Signup</span></a>
                </Stack>
            </Grid>
            </Grid>
        </Box>
        </div>
    )
}

export default Login