'use client'
import { AppBar, Box, Drawer, Stack } from '@mui/material'
import { useState } from 'react'
//Icon
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
//Style
import '../assets/css/Navbar.css'
import Image from 'next/image'

import logo from '../assets/img/logo.png'
import vr from '../assets/img/vr.png'
import image from '../assets/img/image.png'
import cart from '../assets/img/carts.png'
import user from '../assets/img/user.png'
import Link from 'next/link'

function Navbar() {
    const [fun, setfun] = useState(false)
    return (
        <>
            <AppBar id='appbar' style={{position:"relative"}}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", }}>
                            <Image width={120} src={logo} alt="logo" />

                            <div style={{ display: "flex", margin: "1% 0 0 30%" }}>
                                <Image id="icon" width={30} height={30} src={vr} alt='icon' />
                                <h1 style={{ width: "100px" }} id='navitems1'>3D Shopping</h1>
                            </div>
                            <div style={{ display: "flex", margin: "1% 0 0 10%" }}>
                                <Image id="icon" width={30} height={30} src={image} alt='icon' />
                                <Link href='/products/imageSearch'>
                                <h1 style={{ width: "150px" }} id='navitems1'>Product Detection</h1>
                                </Link>
                               
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: 40, margin: "5px 10px" }}>
                            <div id="searchbar">
                                <input id='searchinput' placeholder='Search' />
                                <SearchIcon id='searchicon' />
                            </div>
                            <Image src={cart} id='icon' width={30} height={30} alt="cart" />
                            <Image src={user} id='icon' width={30} height={30}  alt="cart" />
                        </div>
                    </Box>
                </Box>
                <Box sx={{ display: { sm: "none", xs: "block" } }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Image id="logo" src={logo} width={30} height={30} alt="logo" />
                        <MenuIcon id="menuicon" onClick={e => (setfun(true))} />
                    </div>
                </Box>
            </AppBar>

            <Drawer
                anchor={'left'}
                open={fun}
                onClose={e => (setfun(false))} >
                <div style={{ display: "flex" }}>
                    <Image width={30} height={30} src={logo} id="rlogo" alt="logo" />
                    <CloseIcon id="closeicon" onClick={e => (setfun(false))} />
                </div>
                <br />
                <br />
                <div style={{ display: "flex", margin: "10% 10%" }}>
                    <Image width={30} height={30} id="icon" src={vr} alt='icon' />
                    <h1 style={{ width: "100px", color: "black" }} id='navitems1'>3D Shopping</h1>
                </div>
                <div style={{ display: "flex", margin: "1% 0 0 10%" }}>
                    <Image width={30} height={30} id="icon" src={image} alt='icon' />
                    <h1 style={{ width: "150px", color: "black" }} id='navitems1'>Product Detection</h1>
                </div>
                <div style={{ paddingTop: "10%" }}>
                    <Stack direction={'column'} >
                        <div id='navcard'>
                        <Image width={40} height={40}  src={user}  id='icon' alt="cart" />
                        <h4 style={{margin:"15px 0px"}}>Hari Guptha</h4>
                        </div>
                        <div id='navcard'>
                        <Image width={40} height={40} src={cart}  id='icon' alt="cart" />
                        <h4 style={{margin:"15px 0px"}}>Cart</h4>
                        </div>
            
                    </Stack>
                </div>
            </Drawer>
        </>
    )
}

export default Navbar
