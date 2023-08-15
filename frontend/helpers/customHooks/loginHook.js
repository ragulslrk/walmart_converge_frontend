
import { useCallback, useEffect, useState,useRef,useContext } from "react"
import axios from '../../axiosApi/axios';
import { QueryClient,useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation'
import localStorageAuth  from '../../context/localStorageAuth'

 const loginHandler=()=>{
  const [isLoading,setLoading]=useState(false)
  const [isError,setError]=useState(false)
  const [errMsg,setErrMsg]=useState('')
  const router=useRouter()
  const {setAuth}=localStorageAuth()
  const loginMutation=useMutation({mutationFn: ({username,password})=>{
  console.log('in mutation fn ',username,password)
    //set the loading state
    setLoading(true)
    axios.post('/login',
    JSON.stringify({ username, password }),
      {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
      }
    )
    .then(res =>  {
        //set the loading state
        
        setLoading(false)
        setError(false)  
        setErrMsg('')


        console.log(res.data)

        if(res?.data?.access_token){
          setAuth(res.data.access_token,'true')
          router.push('/')

        }

      })
    .catch(err=>{
        console.log(err)
        //set the loading state
        setLoading(false)
        console.log('in error')
        if(err?.response?.data)
        { 
          setAuth(null,'false')
          setError(true)
          setErrMsg(err.response.data.msg)
          
        }
        
        
    
      })

  }})

  const loginHook=({ username, password })=>{

    loginMutation.mutate({ username, password })
  }
  return {loginHook,isLoading,isError,errMsg,setError}
}

export default loginHandler 