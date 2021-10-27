import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function Footer() {

        return(
            <Box component="footer"
                    sx={{
                        py: 3, px: 2, mt: 'auto',
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                    }}
                    >
                    <Container maxWidth="sm">
                    <Typography variant="subtitle1" color="secondary" gutterBottom>
                        Designed and written by Richard Carter.
                    </Typography>
                    <Typography variant="subtitle2" color="secondary">
                    Copyright © 2021
                    </Typography>
                    </Container>
                </Box>
        )
}

export default Footer;