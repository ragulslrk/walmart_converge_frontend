import React from 'react'
import '../assets/css/Phone.css'
import Phone from '../assets/img/phone2.png'
import im from '../assets/img/im.png'
import Image from 'next/image'

import { Box } from '@mui/material'
import case1 from '../assets/img/case.webp'
import charger from '../assets/img/charger.webp'
import { useRouter } from 'next/navigation'
import useAxiosPrivate from '../helpers/customHooks/useAxiosPrivate'
import localStorageAuth  from '../context/localStorageAuth'
import { useQuery } from "@tanstack/react-query";
import ash from '../assets/img/ash.jpg'

const PhoneMain = (props) => {
    console.log(props.productId)
    const{getAuth}=localStorageAuth()
    const {isAuthenticated}=getAuth()
    const axiosPrivate = useAxiosPrivate();
    const router=useRouter()

    if(isAuthenticated!=='true' || !props.productId ) router.push('/login')
    const {data,status,isLoading}=useQuery({
        queryKey:['products',props.productId],
        queryFn: async () => {
            try {
                const response = await axiosPrivate.get(`/products/${props.productId}`);
                console.log(response.data);
                   
                    if(response.data.role==='customer')
                    {
                        return response.data.product_data
                    }else{
                        
                        router.push('/login')

                    }
                

            } catch (err) {
                console.error(err);
                router.push('/login')
            }
        }})

// console.log(img_data['ashs'])
    return (

        <div>
        {isLoading && 'Loading'}
        {data!=null &&<>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <div style={{ display: "flex", gap: "20", margin: "10px 10%" }}>
                    <div style={{ margin: "7% 5%" }}>
                        <div style={{ display: "flex" }}>
                            <div>
                                <h1 style={{ fontSize: "60px" }}>{data.product_name}</h1>
                                <h3 style={{ fontSize: "35px", color: "#4E4848" }}>Price: ₹{data.product_price} </h3>
                            </div>
                           
                        </div>
                        <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>{data.description}</h4>
                        <h5 style={{ fontSize: "25px", color: "#FFC220" }}>Features</h5>
                        {data.features.map((specs,index)=> (
                            <li style={{ margin: "20px 0 0 0" }} key={index}>{specs.key}: {specs.value}</li>
                        ))}
                        
                        <div style={{ display: "flex", gap: 20 }}>
                            <button id="phonebtn">Buy</button>
                            <button id="phonebtn">Add Cart</button>
                        </div>
                    </div>
                    <Image id='phone'  width={150} height={100} src={data.image_url} alt="" />
                </div>
                <div style={{ textAlign: "left", margin: "10px 10% 50px 10%" }}>
                <h2 style={{ margin: "0 0 5% 0" }}>
                    Recommended Product
                </h2>
                <div style={{display:"flex",gap:30}}>
                    <div id='mcard'>
                            <img src={case1} id='mcimg' alt="case" />
                        <div id='detials'>
                            <h2 id='ctitle'>Iphone Case</h2>
                            <h3>Rs 2000</h3>
                        </div>
                    </div>
                    <div id='mcard'>
                            <img src={charger} id='mcimg' alt="case" />
                        <div id='detials'>
                            <h2 id='ctitle'>Iphone charger</h2>
                            <h3>Rs 2000</h3>
                        </div>
                    </div>
                </div>
                </div>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" }, margin: "10px 10%" }}>
                <Image id='phone' width={150} height={100} src={data.image_url}  alt="" />
                <div style={{ display: "flex" }}>
                    <div>
                        <h1 style={{ fontSize: "60px" }}>{data.product_name}</h1>
                        <h3 style={{ fontSize: "35px", color: "#4E4848" }}>Price: ₹{data.product_price} </h3>
                    </div>
                    
                </div>
                <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>{data.description}</h4>
                <h5 style={{ fontSize: "25px", color: "#FFC220" }}>Features</h5>

                 {data.features.map((specs,index)=> (
                            <li style={{ margin: "20px 0 0 0" }} key={index}>{specs.key}: {specs.value}</li>
                        ))}
                <button style={{ margin: "20% 0 0 0" }} id="phonebtn">Buy</button>
                <button style={{ margin: "20px 0 22% 0" }} id="phonebtn">Add Cart</button>
                <div style={{ textAlign: "left", margin: "10px 10% 50px 10%" }}>
                <h2 style={{ margin: "0 0 5% 0" }}>
                    Recommended Product
                </h2>
                <div style={{display:"flex",gap:30,flexDirection:"column"}}>
                    <div id='mcard'>
                            <img src={case1} id='mcimg' alt="case" />
                        <div id='detials'>
                            <h2 id='ctitle'>Iphone Case</h2>
                            <h3>Rs 2000</h3>
                        </div>
                    </div>
                    <div id='mcard'>
                            <img src={charger} id='mcimg' alt="case" />
                        <div id='detials'>
                            <h2 id='ctitle'>Iphone charger</h2>
                            <h3>Rs 2000</h3>
                        </div>
                    </div>
                </div>
                </div>
            </Box>
        </>}
          
        </div>
    )
}

export default PhoneMain