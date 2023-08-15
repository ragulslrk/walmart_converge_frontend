
import { useContext } from "react"
import axios from '../../axiosApi/axios'
import localStorageAuth  from '../../context/localStorageAuth'
import { useRouter } from 'next/navigation'



// refresh token hook 
const  useRefreshToken=()=>{
    const {setAuth,clearAuth}=localStorageAuth()
    const router=useRouter()
    const refresh=async ()=>{
    try{

    
        const response=await axios.get('/refresh_token',{
            withCredentials: true
        })

        if(response?.data?.access_token){
            setAuth(response?.data?.access_token,'true')
            return response?.data?.access_token
        }
    }
    catch(error)
    {   
        console.log(error)
        console.log('in clear tokens')
        clearAuth()
        router.push('/login')


    }
    }
    return refresh

}
export default useRefreshToken;