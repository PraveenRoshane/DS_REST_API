import { Component } from 'react';
import {Facebook, Twitter, Instagram, WhatsApp, Email} from "@mui/icons-material";
import {Typography} from "@mui/material";

class Footer extends Component {
    render() {
        return (
            <div style={{
                marginTop: 10,
                padding: 10,
                backgroundColor: '#ebc340',
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%'
            }}>
                <Typography variant={"subtitle1"}>
                    ©{new Date().getFullYear()} HotelBook.com  All risghts reserved.
                </Typography>
            </div>
        );
    }
}

export default Footer