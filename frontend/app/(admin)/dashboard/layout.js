// import './globals.css'
"use client"

import { useState } from "react";
import { Inter } from 'next/font/google'
import { StyledEngineProvider } from "@mui/material/styles";
const inter = Inter({ subsets: ['latin'] })
// import Navbar from '../../../Components/Navbar'
// import  Footer from '../../../Components/Footer'

import Topbar from "../../../scenes/global/Topbar";
import Sidebar from "../../../scenes/global/Sidebar";

import Dashboard from "../../../scenes/dashboard/Dashboard";
import Invoices from "../../../scenes/Invoices";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../../theme"

export default function ProductLayout({ children }) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    
      <StyledEngineProvider injectFirst>
        <div className={inter.className}>

        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <div style={{display:"flex"}} className="app">

              <Sidebar  isSidebar={isSidebar} />
              <main style={{marginLeft:"20%"}} className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              {children}
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
        
        </div>
        
      </StyledEngineProvider>
    
  )
}
