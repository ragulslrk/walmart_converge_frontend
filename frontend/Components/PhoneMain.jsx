import React from 'react'
import '../assets/css/Phone.css'
import Phone from '../assets/img/phone2.png'
import im from '../assets/img/im.png'

import { Box } from '@mui/material'
import case1 from '../assets/img/case.webp'
import charger from '../assets/img/charger.webp'

const PhoneMain = () => {
    return (
        <div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <div style={{ display: "flex", gap: "20", margin: "10px 10%" }}>
                    <div style={{ margin: "7% 5%" }}>
                        <div style={{ display: "flex" }}>
                            <div>
                                <h1 style={{ fontSize: "60px" }}>IPhone</h1>
                                <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 90,000</h3>
                            </div>
                            <img style={{ width: "70px", height: "70px", padding: "30px 40px" }} src={im} alt="3d" />
                        </div>
                        <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                        <h5 style={{ fontSize: "25px", color: "#FFC220" }}>Features</h5>
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
                    <img id='phone' src={Phone} alt="" />
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
                <img id='phone' src={Phone} alt="" />
                <div style={{ display: "flex" }}>
                    <div>
                        <h1 style={{ fontSize: "60px" }}>IPhone</h1>
                        <h3 style={{ fontSize: "35px", color: "#4E4848" }}>RS 90,000</h3>
                    </div>
                    <img style={{ width: "70px", height: "70px", padding: "30px 10px" }} src={im} alt="3d" />
                </div>
                <h4 style={{ fontSize: "20px", color: "black", fontWeight: "300" }}>Design is not just what it looks like and feels like. Design is how it works</h4>
                <h5 style={{ fontSize: "25px", color: "#FFC220" }}>Features</h5>
                <li style={{ margin: "20px 0 0 0" }}>8 GB RAM | 128 GB ROM</li>
                <li>16.71 cm (6.58 inch) Full HD+ Display</li>
                <li>50MP + 2MP | 8MP Front Camera</li>
                <li>5000 mAh Battery</li>
                <li>Dimensity 6020 Processor</li>
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
        </div>
    )
}

export default PhoneMain