import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Divider } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import mySelfie from '../assets/business-self.jpg';
import resumeLink from '../assets/EFA-WebDev-Resume.pdf';
import apiProject1 from '../assets/apiProject1Thumbnail.png'
import apiProject2 from '../assets/apiProject2Thumbnail.png'
import staticSite from '../assets/staticSiteThumbnail.png';
import cssCreature from '../assets/cssCreaturePreview.png';
import oldPortfolio from '../assets/originalPortfolio.png';
import ContactMe from './ContactMe';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.primary,
  }));


function Body() {

        return(
            <Box className="bodyBox" sx={{ flexGrow: 1}}>
                {/* <Typography variant="h3">Body component</Typography> */}
                <center>
                <Grid container maxWidth="95%" padding="20px" direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <img src={mySelfie} className="myPic" />
                        <p><Link href="../assets/"></Link></p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Item><Typography variant="body1" align="left">My name is Richard Carter.<br/>
                        Located near Dallas, TX.<p/>
                        US Army veteran, single parent, aspiring and versatile web developer with adjacent interests in UI/UX and the crypto industry.<p/>
                        Eager to improve my skills as a developer and deliver quality web products. This portfolio page will be updated as needed and improved as my skill level increases.</Typography></Item>
                        <Container sx={{ padding: '5px' }}>
                            <Tooltip title="My Resume" arrow>
                                <Link href={resumeLink} target="blank" rel="noopener">
                                <IconButton><PictureAsPdfIcon/></IconButton>
                                </Link>
                            </Tooltip>
                            <Tooltip title="My LinkedIn profile" arrow>
                            <Link href="https://www.linkedin.com/in/rcarter52/" target="blank" rel="noopener">
                                <IconButton><LinkedInIcon/></IconButton>
                            </Link>
                            </Tooltip>
                            <Tooltip title="My GitHub page" arrow>
                            <Link href="https://github.com/rcartr" target="blank" rel="noopener">
                                <IconButton><GitHubIcon/></IconButton>
                            </Link>
                            </Tooltip>
                            <Tooltip title="My Twitter profile" arrow>
                            <Link href="https://twitter.com/rbcrtr" target="blank" rel="noopener">
                                <IconButton><TwitterIcon/></IconButton>
                            </Link>
                            </Tooltip>
                        </Container>
                    </Grid>
                </Grid>
                <Divider>PROJECTS</Divider>
                <Grid container maxWidth="90%" padding="20px" direction="row" spacing={1} justifyContent="center" rowSpacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="https://rcartr.github.io/apiProject1/" target="blank">
                            <CardMedia
                                component="img"
                                height="140"
                                image={apiProject1}
                                alt="API Project 1"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    API Project 1
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" align="left">
                                    EFA Project - First JavaScript project for making API fetch calls. Basic use of GET fetch and DOM manipulation.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="https://carter-agi-project2.web.app" target="blank">
                            <CardMedia
                                component="img"
                                height="140"
                                image={apiProject2}
                                alt="API Project 2"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    API Project 2
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" align="left">
                                    EFA Project - Second JavaScript project for making API fetch calls, requiring a key and more sophisticated DOM manipulation.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="https://rcartr.github.io/staticLayout/" target="blank">
                            <CardMedia
                                component="img"
                                height="140"
                                image={staticSite}
                                alt="Static site"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Static Site
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" align="left">
                                    EFA Project - Static recreation of dynamic website, meant to exercise our HTML and CSS skills.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="https://codepen.io/rcartr/pen/GRmvKmP" target="blank">
                            <CardMedia
                                component="img"
                                height="140"
                                image={cssCreature}
                                alt="CSS Creature"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    CSS Creature
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" align="left">
                                    EFA Project - Using HTML divs and CSS to create a "CSS Creature".
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="https://rcartr.github.io/oldindex.html" target="blank">
                            <CardMedia
                                component="img"
                                height="140"
                                image={oldPortfolio}
                                alt="Original Portfolio"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Original Portfolio
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" align="left">
                                    EFA Project - First draft of a portfolio. Looks similar, but built only with HTML and CSS. Current portfolio is built with React and MUI.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Divider>CONTACT</Divider>
                <ContactMe />
                    </center>
            </Box>
        )
}

export default Body;