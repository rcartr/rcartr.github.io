import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';

const ContactMe = () => {
    return(
        <Box className="contactBox" width="450" sx={{ padding: '10px', margin: '10px' }}>
            <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xeqvrzww" method="post">
                <fieldset id="fs-frm-inputs">
                    <label for="full-name">Full Name</label><br/>
                        <TextField type="text" variant="standard" size="50" name="name" id="full-name" placeholder="Name" fullWidth required/><br/><br/>
                    <label for="email-address">Email Address</label><br/>
                        <TextField type="email" variant="standard" size="50" name="_replyto" id="email-address" placeholder="email@domain.com" fullWidth required/><br/><br/>
                    <label for="message">Message</label><br/>
                        <TextField type="text" variant="outlined" multiline="true" rows="5" cols="50" name="message" id="message" placeholder="Your message." fullWidth required/>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/><p/>
                    <Button type="submit" variant="contained" sx={{ margin: '10px' }}>Submit</Button>
                </fieldset><br/>
            </form>
        </Box>
    )
}

export default ContactMe;