import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Environment } from '@react-three/drei'
import { Box } from '@mui/material';

const ThreeDPhone = () => {
    const { scene } = useGLTF('./Phone1.glb');

    return (
        <group rotation={[Math.PI / 1, 2, Math.PI / 1]}>
            <hemisphereLight intensity={10} groundColor="black" />
            <pointLight intensity={10} />
            <primitive object={scene} scale={0.75} />
        </group>
    );
};

const PhoneCanvas = () => {
    return (
        <>
        <Box sx={{display:{sm:"block",xs:"none"}}}>
        <div style={{position:"absolute",display:"flex"}}> 
                <div style={{margin:"25% 40%",width:"300px"}}>
                <h1 style={{ fontSize: "60px" }}>IPhone</h1>
                <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 90,000</h3>
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
                <h1 style={{ fontSize: "60px" }}>IPhone</h1>
                <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 90,000</h3>
                <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                <h5 style={{ fontSize: "25px", color: "#FFC220",width:"300px",marginTop:"20px" }}>Features</h5>
                        <li style={{ margin: "20px 0 0 0" }}>8 GB RAM | 128 GB ROM</li>
                        <li>16.71 cm (6.58 inch) Full HD+ Display</li>
                        <li>50MP + 2MP | 8MP Front Camera</li>
                        <li>5000 mAh Battery</li>
                        <li>Dimensity 6020 Processor</li>
                        <div style={{ display: "flex", gap: 20 ,flexDirection:"column",marginTop:"20px"}}>
                            <button id="phonebtn">Buy</button>
                            <button id="phonebtn">Add Cart</button>
                        </div>
                </div>
            </div>
        </Box>
        <Suspense >
        <Canvas style={{ width: '95vw', height: '90vh' }} frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 0.5 }} gl={{ preserveDrawingBuffer: true }}>
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
