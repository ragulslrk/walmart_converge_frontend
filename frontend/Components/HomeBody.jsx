'use client'
import '../assets/css/HomeBody.css'

import speaker from '../assets/img/2.png'
import vr2 from '../assets/img/vr2.png'
import Image from 'next/image'
import case1 from '../assets/img/case.webp'
import charger from '../assets/img/charger.webp'
import phone from '../assets/img/phone.png'
import watch from '../assets/img/watch.png'
import ring from '../assets/img/ring.png'
import laptop from '../assets/img/laptop.png'
import shirt from '../assets/img/shirt.png'
import object from '../assets/img/object.png'
import { Box } from '@mui/material'
import { useContext, useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import useAxiosPrivate from '../helpers/customHooks/useAxiosPrivate'
import localStorageAuth  from '../context/localStorageAuth'
import { useQuery } from "@tanstack/react-query";
const HomeBody = () => {
    const{getAuth}=localStorageAuth()
    const {isAuthenticated}=getAuth()
    const axiosPrivate = useAxiosPrivate();
    const router=useRouter()
    const [Products,setProducts]=useState([])

    if(isAuthenticated!=='true') router.push('/login')
    
    const {data,status,isLoading}=useQuery({
        queryKey:['products'],
        queryFn: async () => {
            try {
                const response = await axiosPrivate.get('/products');
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
 

        console.log(data)
    return (
        <div>
            {isLoading&&'Loading'}
            
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <div id="hcard">
                    <Image id='hcimg' style={{ marginLeft: "50px" }} width={180} src={speaker} alt="speaker" />
                    <div id='hcardbody'>
                        <h2 id='hctitle1'>Collaborative Shopping Adventure</h2>
                        <h5 id='hctitle2'>Step into a multiplayer shopping realm where you, your friends, or even random adventurers indulge in a virtual store, transformed into an exhilarating gaming experience.</h5>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button id='hbutton'>Try It Out</button>
                        </div>
                    </div>
                    <Image id='hcimg' style={{ marginRight: "50px" }} src={vr2} width={180} alt="vr2" />
                </div>
                <h1 style={{ textAlign: "center", margin: "50px 0px" }}>
                    Top selling product
                </h1>
                <div style={{ display: "flex", margin: '30px 40px' }}>
                    <div>
                        <div style={{ display: "flex", gap: 10 }}>
                        <div id='img1' >
                            <Image src={shirt}  id='hmimg'  alt="shirt" />
                            </div>
                            <div id='img2' >
                            <Image src={laptop}  id='hmimg' alt="laptop" />
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: 10, marginTop: "20px" }}>
                            <div id='img4' >
                            <Image src={watch} id='hmimg' alt="watch" />
                            </div>
                            <div id='img3' >
                                <Image src={ring} id='hmimg' alt="ring" />
                            </div>
                        </div>
                    </div>
                    <div id='img5'>
                    <Image src={phone} id='hmimg' alt="ring" />
                    </div>
                </div>
                <div id="hcard">
                    <Image style={{ marginLeft: "50px" }} src={object} width={180} alt="speaker" />
                    <div id='hcardbody'>
                        <h2 id='hctitle1'>Image-Based Product Detection</h2>
                        <h5 id='hctitle2'>Introducing our innovative 'Product Detection through Image' feature! No need to stress about knowing the product name - simply upload an image and let us identify it for you.</h5>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button id='hbutton'>Try It Out</button>
                        </div>
                    </div>
                </div>
                <h1 style={{ textAlign: "center", margin: "50px 0px" }}>
                    Recommended Product
                </h1>
                <div style={{ display: "flex", margin: '30px 40px' }}>
                
            <div>
                <div style={{display:"flex",gap:30}}>
                    <div id='mcard'>
                            <Image src={case1} id='mcimg' alt="case" />
                        <div id='detials'>
                            <h2 id='ctitle'>Iphone Case</h2>
                            <h3>Rs 2000</h3>
                        </div>
                    </div>
                    <div id='mcard'>
                            <Image src={charger} id='mcimg' alt="case" />
                        <div id='detials'>
                            <h2 id='ctitle'>Iphone charger</h2>
                            <h3>Rs 2000</h3>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <img style={{ marginLeft: "50px", width: "70%", marginTop: "40px" }} src={vr2} alt="speaker" />
                <div id='hcardbody'>
                    <h2 id='hctitle1'>Collaborative Shopping Adventure</h2>
                    <h5 id='hctitle2'>Step into a multiplayer shopping realm where you, your friends, or even random adventurers indulge in a virtual store, transformed into an exhilarating gaming experience.</h5>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button id='hbutton'>Try It Out</button>
                    </div>
                </div>
                <h1 style={{ textAlign: "center", margin: "50px 0px" }}>
                    Top selling product
                </h1>
                <div style={{margin:"0px 30px"}}>
                <img id='phcimg' src={watch} alt="shirt" />
                <img id='phcimg' src={ring} alt="laptop"  />
                <img id='phcimg' src={phone} alt="phone" />
                <img id='phcimg' src={shirt}  alt="shirt" />
                <img id='phcimg' src={laptop} alt='laptop' />
                </div>
                <div style={{marginBottom:"50px"}} >
                    <img style={{ marginLeft: "50px", width: "70%", marginTop: "40px" }} src={object} alt="speaker" />
                    <div id='hcardbody'>
                        <h2 id='hctitle1'>Image-Based Product Detection</h2>
                        <h5 id='hctitle2'>Introducing our innovative 'Product Detection through Image' feature! No need to stress about knowing the product name - simply upload an image and let us identify it for you.</h5>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button id='hbutton'>Try It Out</button>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default HomeBody