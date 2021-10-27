import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WorkIcon from '@mui/icons-material/Work';


function Header() {

        return(
            <Box className="headerBox">
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                        >
                            <WorkIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">Richard Carter's Portfolio</Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </Box>
        )
}

export default Header;