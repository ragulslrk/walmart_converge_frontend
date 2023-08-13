import React from 'react'
import '../assets/css/Phone.css'
import glass from '../assets/img/glass.png'
import im from '../assets/img/im.png'
import { Box } from '@mui/material'
import case1 from '../assets/img/case.webp'
import charger from '../assets/img/charger.webp'

const SunglassMain = () => {
    return (
        <div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <div style={{ display: "flex", gap: "20", margin: "10px 10%" }}>
                    <div style={{ margin: "7% 5%" }}>
                        <div style={{ display: "flex" }}>
                            <div>
                                <h1 style={{ fontSize: "60px" }}>Sun Glass</h1>
                                <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 90,000</h3>
                            </div>
                            <img style={{ width: "70px", height: "70px", padding: "30px 40px" }} src={im} alt="3d" />
                        </div>
                        <div style={{ display: "flex", gap: 20 }}>
                            <button id="phonebtn">Buy</button>
                            <button id="phonebtn">Add Cart</button>
                        </div>  
                    </div>
                    <img  style={{width:"400px",height:"550px"}} src={glass} alt="" />
                </div>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" }, margin: "10px 10%" }}>
                <img style={{width:"300px",height:"300px"}}  src={glass} alt="" />
                <div style={{ display: "flex" }}>
                    <div>
                        <h1 style={{ fontSize: "60px" }}>Sun Glass</h1>
                        <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 90,000</h3>
                    </div>
                    <img style={{ width: "70px", height: "70px", padding: "30px 10px" }} src={im} alt="3d" />
                </div>
                <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                <button style={{ margin: "20% 0 0 0" }} id="phonebtn">Buy</button>
                <button style={{ margin: "20px 0 22% 0" }} id="phonebtn">Add Cart</button>
            </Box>
        </div>
    )
}

export default SunglassMain