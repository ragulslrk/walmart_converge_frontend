import React from 'react'
import '../assets/css/login.css'
import { Box, Grid, Stack, TextField } from '@mui/material'
import '../assets/css/login.css'
import loginimg from '../assets/img/1.png'
import Image from 'next/image'
import Alert from '@mui/material/Alert';
import loginHandler from '../helpers/customHooks/loginHook'
import { useCallback, useEffect, useState,useRef } from "react"

const Login = () => {

   const username=useRef()
   const password=useRef()
   const [isEmptyValue,setEmpty]=useState(false) 
   const {loginHook,isLoading,isError,errMsg,setError}=loginHandler()

  const  handleLogin=()=>{
      
      console.log(username.current.value,password.current.value)
      setError(false)
      if(!username.current.value || !password.current.value) {setEmpty(true)}
      else{
        setEmpty(false)
        
        console.log(isLoading)
        loginHook({username:username.current.value,password:password.current.value})
      }
      
  }
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
                {isEmptyValue ? <Alert severity="error" >Username and Password are Required!</Alert>:null}
                {isError? <Alert severity="error" className="mt-2">{errMsg}</Alert>:null}

                    <TextField sx={{width:"250px"}}  label="Username" placeholder='Enter your username'  inputRef={username}  />
                    <br />
                    <TextField   label="Password" placeholder='Enter your Password'   inputRef={password}  />

                    <a><h5 id='sub' style={{marginLeft:"50%",fontWeight:"300",color:"black",padding:"10px 0px"}}>Forgot Password ?</h5></a>
                    <button id="btn" onClick={handleLogin}
            disabled={isLoading}>{isLoading?'Loading':'Sign in'}</button>
                    <a id='sub' style={{textAlign:"center",padding:"50px 0 0 0"}}><span>Create new account ?</span><span style={{color:"#e2b023"}}> Signup</span></a>
                </Stack>
            </Grid>
            </Grid>
        </Box>
        </div>
    )
}

export default Login