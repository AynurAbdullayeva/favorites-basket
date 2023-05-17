import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "antd";
import { Link } from "@mui/material";
import { dataContext } from "../../Context/BasketContext";
import { useContext } from "react";

function appBarLabel(label) {
  const{basket,setBasket}=useContext(dataContext)

  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <button style={{backgroundColor:"green",border:"none", width: "100px", fontSize: "20px", display: "flex" }}>
        <Link to="/favorites" style={{color:"white"}}>Favorites</Link><sup>{basket.length}</sup>
      </button>
      <Button style={{backgroundColor:"red",color:"white", border:"none", width: "100px", fontSize: "20px"}} size="small" onClick={()=>{
        setBasket([])
        }}>Clear</Button>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel("enableColorOnDark")}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
