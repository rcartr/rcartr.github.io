import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function Footer() {

        return(
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                    
                <Box component="footer"
                    sx={{
                        py: 3, px: 2, mt: 'auto',
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                    }}
                    >
                    <Container maxWidth="sm">
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        This portfolio is designed, developed, and written by Richard Carter.
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                    Copyright © 2021
                    </Typography>
                    </Container>
                </Box>
            </Box>
        )
}

export default Footer;