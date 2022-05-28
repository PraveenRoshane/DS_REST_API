import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { Button, Menu, Fade, MenuItem } from '@mui/material';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'Hotels Booking.com'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {sessionStorage.getItem("user") == null ?
                <>
                <Link
                    color="inherit"
                    variant="h6"
                    underline="none"
                    href="/Signin"
                    sx={rightLink}
                >
                  {'Sign In'}
                </Link>
                <Link
                    variant="h6"
                    underline="none"
                    href="/Signup"
                    sx={{ ...rightLink, color: 'secondary.main' }}
                >
                  {'Sign Up'}
                </Link>
                </>:
                <>
                  <Button
                      color='inherit'
                      onClick={handleClick}
                      sx={{ typography: 'h6' }}
                  >
                    {sessionStorage.getItem("user")}
                  </Button>
                  <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                  >
                    {/*<MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                    <MenuItem onClick={() => {
                      navigate('/MyHotels')
                    }}>My hotels</MenuItem>
                    <MenuItem onClick={() => {
                      navigate('/MyReservations')
                    }
                    }>My reservations</MenuItem>
                    <MenuItem onClick={() => {
                      sessionStorage.removeItem("user")
                      navigate('/')
                    }}>Logout</MenuItem>
                  </Menu>
                </>
                // <Typography variant={"h6"}> {sessionStorage.getItem("user")} </Typography>
            }
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
