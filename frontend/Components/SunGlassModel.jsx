import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Environment } from '@react-three/drei'
import { Box } from '@mui/material';

const ThreeGlass = () => {
    const { scene } = useGLTF('./glass.glb');

    return (
        <group  >
            <hemisphereLight intensity={10} groundColor="black" />
            <pointLight intensity={10} />
            <primitive object={scene} scale={0.050} />
        </group>
    );
};

const ThreeGlassCanvas = () => {
    return (
        <>
        <Box sx={{display:{sm:"block",xs:"none"}}}>
        <div style={{position:"absolute",display:"flex"}}> 
                <div style={{margin:"60% 80%",width:"300px"}}>
                <h1 style={{ fontSize: "60px" }}>Rolex</h1>
                <h3 style={{ fontSize: "35px", color: "#4E4848",width:"300px" }}>RS 100,000</h3>
                <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                <div style={{ display: "flex", gap: 20 ,marginTop:"20px"}}>
                            <button id="phonebtn">Buy</button>
                            <button id="phonebtn">Add Cart</button>
                        </div>
                </div>
            </div>
        </Box>
        <Box sx={{display:{sm:"none",xs:"block"}}}>
        <div style={{position:"absolute",display:"flex",flexDirection:"column"}}> 
                <div style={{margin:"130% 10% 0 10%"}} >
                <h1 style={{ fontSize: "60px" }}>SunGlass</h1>
                <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 100,000</h3>
                <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                <h5 style={{ fontSize: "25px", color: "#FFC220",width:"300px",marginTop:"20px" }}>Features</h5>
                        <div style={{ display: "flex", gap: 20,flexDirection:"column",marginTop:"20px"}}>
                            <button id="phonebtn">Buy</button>
                            <button id="phonebtn">Add Cart</button>
                        </div>
                </div>
            </div>
        </Box>
        <Suspense >
        <Box sx={{display:{sm:"block",xs:"none"}}} >
        <Canvas style={{ width: '95vw', height: '90vh',paddingLeft:"300px" }} frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 0.5 }} gl={{ preserveDrawingBuffer: true }}>
                <Environment preset="city" />
                <OrbitControls enableZoom={false} />
                <ThreeGlass />
            </Canvas>
        </Box>
        <Box sx={{display:{sm:"none",xs:"block"}}}>
        <Canvas style={{ width: '95vw', height: '90vh' }} frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 0.5 }} gl={{ preserveDrawingBuffer: true }}>
                <Environment preset="city" />
                <OrbitControls enableZoom={false} />
                <ThreeGlass />
            </Canvas>
        </Box>
        </Suspense>
<Box sx={{display:{sm:"none",xs:"block"},marginBottom:"600px"}}>

</Box>
        </>
    );
};

export default ThreeGlassCanvas;
