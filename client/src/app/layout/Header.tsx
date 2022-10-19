import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Drawer } from '@mui/material';
import SideMenu from './SideMenu';

export default function () {

    const [isOpen, setIsOpen] = React.useState<boolean>();
    const [title, setTitle] = React.useState("Resume");

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{
                    justifyContent: 'center',
                    backgroundColor: 'secondary.main',
                    radius: '2',
                    width: '100%',
                }}>
                    <Button onClick={toggleMenu}><IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton></Button>
                    <Drawer
                        anchor="right"
                        open={isOpen}
                        onClose={toggleMenu}
                    >
                        <SideMenu setTitle={setTitle}/>
                    </Drawer>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="primary">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
