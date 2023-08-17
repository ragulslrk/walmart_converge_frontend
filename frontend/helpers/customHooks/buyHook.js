
import { useCallback, useEffect, useState,useRef,useContext } from "react"
import axios from '../../axiosApi/axios';
import { QueryClient,useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation'
import localStorageAuth  from '../../context/localStorageAuth'

 const buyHandler=()=>{
  const [is_Loading,setLoading]=useState(false)
  const [isError,setError]=useState(false)
  const [errMsg,setErrMsg]=useState('')
  const router=useRouter()
  const [payUrl,setPayUrl]=useState('')
  // const {setAuth}=localStorageAuth()
  const buyMutation=useMutation({mutationFn: ({product_id})=>{
  console.log('in buy mutation',product_id)
    //set the loading state
    setLoading(true)
    axios.post('/orders',
    JSON.stringify({product_id}),
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

        if(res?.data?.payment_url){
          setPayUrl(res?.data?.payment_url)

        }

      })
    .catch(err=>{
        console.log(err)
        //set the loading state
        setLoading(false)
        console.log('in error')
        if(err?.response?.data)
        { 
          
          setError(true)
          setErrMsg(err.response.data.msg)
          
        }
        
        
    
      })

  }})

  const BuyHook=({ product_id })=>{

    buyMutation.mutate({ product_id })
  }
  return {BuyHook,is_Loading,isError,errMsg,setError,payUrl}
}

export default buyHandler 