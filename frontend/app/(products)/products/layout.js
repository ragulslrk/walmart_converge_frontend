// import './globals.css'
import { Inter } from 'next/font/google'
import { StyledEngineProvider } from "@mui/material/styles";
const inter = Inter({ subsets: ['latin'] })
import Navbar from '../../../Components/Navbar'
import  Footer from '../../../Components/Footer'

export default function ProductLayout({ children }) {
  return (
    
      <StyledEngineProvider injectFirst>
      <div className={inter.className}>
        <Navbar/>
        {children}
        
        </div>
        <Footer/>
      </StyledEngineProvider>
    
  )
}
