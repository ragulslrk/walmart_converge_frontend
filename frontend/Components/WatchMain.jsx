import React from 'react'
import '../assets/css/Phone.css'
import watch from '../assets/img/watch2.png'
import im from '../assets/img/im.png'
import { Box } from '@mui/material'
const WatchMain = () => {
    return (
        <div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <div style={{ display: "flex", gap: "20", margin: "10px 10%" }}>
                    <div style={{ margin: "7% 5%" }}>
                        <div style={{ display: "flex" }}>
                            <div>
                                <h1 style={{ fontSize: "60px" }}>Rolex</h1>
                                <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 100,000</h3>
                            </div>
                            <img style={{ width: "70px", height: "70px", padding: "30px 40px" }} src={im} alt="3d" />
                        </div>
                        <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                        <h5 style={{ fontSize: "25px", color: "#FFC220" }}>Features</h5>
                        <li style={{ margin: "20px 0 0 0" }}>3 Year Warranty</li>
                        <li>Fully Serviced & Polished</li>
                        <li>Time-Tested for Accuracy</li>
                        <li>Waterproof up to 100 meters</li>
                        <li>Analog Display</li>
                        <div style={{ display: "flex", gap: 20 }}>
                            <button id="phonebtn">Buy</button>
                            <button id="phonebtn">Add Cart</button>
                        </div>
                    </div>
                    <img id='phone' style={{width:"400px"}} src={watch} alt="" />
                </div>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" }, margin: "10px 10%" }}>
                <img id='phone' style={{width:"250px",height:"40vh"}} src={watch} alt="" />
                <div style={{ display: "flex" }}>
                    <div>
                        <h1 style={{ fontSize: "60px" }}>Rolex</h1>
                        <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 100,000</h3>
                    </div>
                    <img style={{ width: "70px", height: "70px", padding: "30px 40px" }} src={im} alt="3d" />
                </div>
                <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                <h5 style={{ fontSize: "25px", color: "#FFC220" }}>Features</h5>
                <li style={{ margin: "20px 0 0 0" }}>3 Year Warranty</li>
                        <li>Fully Serviced & Polished</li>
                        <li>Time-Tested for Accuracy</li>
                        <li>Waterproof up to 100 meters</li>
                        <li>Analog Display</li>
                <button style={{ margin: "20% 0 0 0" }} id="phonebtn">Buy</button>
                <button style={{ margin: "20px 0 22% 0" }} id="phonebtn">Add Cart</button>
            </Box>
        </div>
    )
}

export default WatchMain