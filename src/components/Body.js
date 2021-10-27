import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import mySelfie from '../assets/business-self.jpg';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Body() {

        return(
            <Box className="bodyBox" sx={{ flexGrow: 1}}>
                {/* <Typography variant="h3">Body component</Typography> */}
                <Grid container spacing={2} justifyContent="space-around">
                    <Grid item xs={4}>
                        <img src={mySelfie} className="myPic" />
                        <p><Link href="../assets/"></Link></p>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><Typography variant="body1" align="left">My name is Richard Carter.<p/>
                        US Army veteran, single parent, aspiring junior level web developer.</Typography></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>card</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>card</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>card</Item>
                    </Grid>
                </Grid>
            </Box>
        )
}

export default Body;