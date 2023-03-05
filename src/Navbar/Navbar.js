import * as React from 'react';
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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [modalShow1, setModalShow1] = React.useState(false);
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" style={{cursor:'pointer'}} sx={{ my: 2 }}>
        SmallTalk
      </Typography>
      <Divider />
      <List >
          <ListItem disablePadding style={{flexDirection:'column'}}>
            <ListItemButton onClick={() => setModalShow1(true) } sx={{ textAlign: 'center', color: "#000" }}>
              About the App
            </ListItemButton>
            <ListItemButton onClick={props.themeToggler} sx={{ textAlign: 'center', color: "#000" }}>
              Dark Mode
            </ListItemButton>
            <ListItemButton onClick={() => props.history.push("/")} sx={{ textAlign: 'center', color: "#000" }}>
              Logout
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );


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
            style={{cursor:'pointer'}}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            SmallTalk
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <>
              <Button onClick={() => setModalShow1(true)} sx={{ color: '#000' }}>
                About
              </Button>
              <Button onClick={props.themeToggler} sx={{ color: '#000' }}>
                Dark Mode
              </Button>
              <Button onClick={() => props.history.push("/")} sx={{ color: '#000' }}>
                Logout
              </Button>
              </>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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
    </Box>
  );
}

export default withRouter(DrawerAppBar);
