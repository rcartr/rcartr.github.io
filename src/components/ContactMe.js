import * as React from 'react';

import Button from '@mui/material/Button';

const ContactMe = () => {
    return(
        <div className="main">
            <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xeqvrzww" method="post">
                <fieldset id="fs-frm-inputs">
                    <label for="full-name">Full Name</label><br/>
                        <input type="text" size="50" name="name" id="full-name" placeholder="First and Last" required=""/><br/><br/>
                    <label for="email-address">Email Address</label><br/>
                        <input type="email" size="50" name="_replyto" id="email-address" placeholder="email@domain.com" required=""/><br/><br/>
                    <label for="message">Message</label><br/>
                        <textarea rows="5" cols="50" name="message" id="message" placeholder="Please write your message or inquiry here." required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                    <Button type="submit" variant="contained" sx={{ margin: '10px' }}>Submit</Button>
                </fieldset><br/>
            </form>
        </div>
    )
}

export default ContactMe;