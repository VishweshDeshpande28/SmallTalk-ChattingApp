import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import About from "./About";
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [theme, setTheme] = useState('light');  
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [modalShow1, setModalShow1] = React.useState(false);

  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        SmallTalk
      </Typography>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    
    <Box sx={{ display: 'flex' }}>
    <About show={modalShow1} onHide={() => setModalShow1(false)}/>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            SmallTalk
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          
              <>
              <Button  sx={{ color: '#fff' }}>
                Profile
              </Button>
              <Button onClick={() => setModalShow1(true)} sx={{ color: '#fff' }}>
                About
              </Button>
              <Button onClick={() => themeToggler(ThemeProvider)} sx={{ color: '#fff' }}>
                Dark Mode
              </Button>
              <Button onClick={() => props.history.push("/")} sx={{ color: '#fff' }}>
                Logout
              </Button>
              </>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default withRouter(DrawerAppBar);
