
const localStorageAuth=()=>{

    const setAuth=(access_token,isAuthenticated)=>{
        localStorage.setItem('access_token',access_token)
        localStorage.setItem('isAuthenticated',isAuthenticated)
    }

    const getAuth=()=>{
        const access_token=localStorage.getItem('access_token')!==null?localStorage.getItem('access_token'):'false'
        const isAuthenticated=localStorage.getItem('isAuthenticated')
       
        return {access_token,isAuthenticated}

    }
    const clearAuth=()=>{
        localStorage.removeItem("access_token");
        localStorage.removeItem("isAuthenticated");


    }
    return {setAuth,getAuth,clearAuth}
} 
export default localStorageAuth;