'use client'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Environment } from '@react-three/drei'
import { Box } from '@mui/material';
import '../assets/css/Phone.css'
import { useRouter } from 'next/navigation'
import useAxiosPrivate from '../helpers/customHooks/useAxiosPrivate'
import localStorageAuth  from '../context/localStorageAuth'
import { useQuery } from "@tanstack/react-query";

const ThreeDPhone = () => {
    const { scene } = useGLTF('/watch.glb');

    return (
        <group >
            <hemisphereLight intensity={10} groundColor="black" />
            <pointLight intensity={10} />
            <primitive object={scene} scale={1} />
        </group>
    );
};

const PhoneCanvas = () => {
    const{getAuth}=localStorageAuth()
    const {isAuthenticated}=getAuth()
    const router=useRouter()

    if(isAuthenticated!=='true') router.push('/login')
    return (
        <>
        <Box sx={{display:{sm:"block",xs:"none"}}}>
        <div style={{position:"absolute",display:"flex"}}> 
                <div style={{margin:"25% 30%",width:"300px"}}>
                <h1 style={{ fontSize: "60px" }}>Rolex</h1>
                <h3 style={{ fontSize: "35px", color: "#4E4848",width:"300px" }}>RS 100,000</h3>
                <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                </div>
                <div style={{margin:"25% 30%"}} >
                <h5 style={{ fontSize: "25px", color: "#FFC220",width:"400px" }}>Features</h5>
                        <li style={{ margin: "20px 0 0 0" }}>8 GB RAM | 128 GB ROM</li>
                        <li>16.71 cm (6.58 inch) Full HD+ Display</li>
                        <li>50MP + 2MP | 8MP Front Camera</li>
                        <li>5000 mAh Battery</li>
                        <li>Dimensity 6020 Processor</li>
                        <div style={{ display: "flex", gap: 20 }}>
                            <button id="phonebtn">Buy</button>
                            <button id="phonebtn">Add Cart</button>
                        </div>
                </div>
            </div>
        </Box>
        <Box sx={{display:{sm:"none",xs:"block"}}}>
        <div style={{position:"absolute",display:"flex",flexDirection:"column"}}> 
                <div style={{margin:"170% 10% 0 10%"}} >
                <h1 style={{ fontSize: "60px" }}>Rolex</h1>
                <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 100,000</h3>
                <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                <h5 style={{ fontSize: "25px", color: "#FFC220",width:"300px",marginTop:"20px" }}>Features</h5>
                <li style={{ margin: "20px 0 0 0" }}>3 Year Warranty</li>
                        <li>Fully Serviced & Polished</li>
                        <li>Time-Tested for Accuracy</li>
                        <li>Waterproof up to 100 meters</li>
                        <li>Analog Display</li>
                        <div style={{ display: "flex", gap: 20 ,flexDirection:"column",marginTop:"20px"}}>
                            <button id="phonebtn">Buy</button>
                            <button id="phonebtn">Add Cart</button>
                        </div>
                </div>
            </div>
        </Box>
        <Suspense >
        <Canvas style={{ width: '95vw', height: '90vh',paddingTop:"130px" }} frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 0.5 }} gl={{ preserveDrawingBuffer: true }}>
                <Environment preset="city" />
                <OrbitControls enableZoom={false} />
                <ThreeDPhone />
            </Canvas>
        </Suspense>
<Box sx={{display:{sm:"none",xs:"block"},marginBottom:"600px"}}>

</Box>
        </>
    );
};

export default PhoneCanvas;
