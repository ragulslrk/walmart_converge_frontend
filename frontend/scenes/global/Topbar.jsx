import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material/InputBase"
import LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined"
import NotificationsModeOutlinedIcon  from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon  from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined"
import SearchIcon  from "@mui/icons-material/Search"



const Topbar = ()=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Box >
                <Box display="flex" justifyContent="space-between" p={2}>
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px" >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p:1 }}>
                <SearchIcon/>
            </IconButton>
        </Box>
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode == "dark" ?(
                    <DarkModeOutlinedIcon sx={{color:"black"}}/>
                ) : (
                    <LightModeOutlinedIcon sx={{color:"black"}}/>
                )}
            </IconButton>

            <IconButton>
                <NotificationsModeOutlinedIcon sx={{color:"black"}} />
            </IconButton>

            <IconButton>
                <SettingsOutlinedIcon sx={{color:"black"}}/>
            </IconButton>

            <IconButton>
                <PersonOutlinedIcon sx={{color:"black"}}/>
            </IconButton>
        </Box>
    </Box>       
        </Box>
    )
}

export default Topbar