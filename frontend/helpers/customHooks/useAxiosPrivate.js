
import { useContext, useEffect } from "react"
import axiosPrivate from '../../axiosApi/axios'
import useRefreshToken from './useRefreshToken'
import localStorageAuth  from '../../context/localStorageAuth'


const useAxiosPrivate=()=>{
    const refresh=useRefreshToken()
    const {getAuth}=localStorageAuth()
    const {access_token}=getAuth()
    useEffect(()=>{

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    console.log('in headers config')
                    config.headers['Authorization'] = `Bearer ${access_token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );
        const responseIntercept=axiosPrivate.interceptors.response.use(response=>response,async (error)=>{
            const prevRequest = error?.config;
            if(error?.response?.status ===403 && !prevRequest.sent){
                prevRequest.sent=true
                const newAccessToken=await refresh()
                    prevRequest.headers['Authorization']=`Bearer ${newAccessToken}`
                    return axiosPrivate(prevRequest);
                
                
            }
            return Promise.reject(error);
        })
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }

    },[refresh,access_token])

    return axiosPrivate
}
export default useAxiosPrivate;
