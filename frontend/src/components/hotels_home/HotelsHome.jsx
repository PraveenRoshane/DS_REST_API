import {alpha, InputBase} from "@mui/material";
import Grid from "@mui/material/Grid";
import HotelCard from "./HotelCard";
import {useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppAppBar from "../home/modules/views/AppAppBar";
import Footer from "../footer/Footer";

const backgroundImage = 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

export default function HotelsHome(){
    const [searchResults, setSearchResult] = useState([]);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(response => response.json())
            .then(data => setHotels(data))
            .catch(console.error)
    }, []);

    const searchProduct = (value) => {
        if (searchResults == "") {
            return value
        } else if (value.name.toLowerCase().includes(searchResults.toLowerCase())) {
            return value
        }
    }

    return (
        <>
        <AppAppBar/>
            <Box sx={{
                marginLeft: '100px',
                marginRight: '100px'
            }}>
                <div className="container">
                    <br/>
                    <Search sx={{
                        marginLeft: '500px',
                        marginRight: '500px'
                    }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search hotels…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={e => setSearchResult(e.target.value)}
                        />
                    </Search>
                    <br />
                    <Grid container spacing={3}>
                        {hotels.filter((value) => searchProduct(value)).map((Product) => (
                            <Grid item key={Product.id} xs={12} md={6} lg={3}>
                                <HotelCard product={Product} />
                            </Grid>
                        ))}
                    </Grid>
                    <br/>
                </div>
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'common.black',
                        opacity: 0.5,
                        zIndex: -1,
                    }}
                />
                <Background sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundColor: '#7fc7d9', // Average color of the background image.
                    backgroundPosition: 'center',
                }}
                />
            </Box>
        <Footer/>
        </>
    )
}