import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import AppAppBar from "../home/modules/views/AppAppBar";
import {useEffect, useState} from "react";
import {
    Avatar,
    Box, Container,
    FormControl,
    Grid,
    InputLabel, MenuItem,
    Paper,
    Rating,
    Select,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {Bed, HotelRounded, KingBed, AddLocation, SingleBed, SingleBedTwoTone} from "@mui/icons-material";
import {Carousel} from "react-carousel-minimal";
import Button from "@mui/material/Button";
import Footer from "../footer/Footer";

export default function Hotel(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/hotels/${id}`)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(console.error)
    }, [id]);

    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            caption: "Scotland"
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            caption: "San Francisco"
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            caption: "Darjeeling"
        }
    ];
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    const current = new Date();
    const NowDate = `${current.getFullYear()}-${current.getMonth()<10 ? 0:""}${current.getMonth()+1}-${current.getDate()}`;

    const { register, handleSubmit } = useForm({
        mode: 'all'
    });

    return(
        <div style={{backgroundColor: 'lightcyan', height:"100vh"}}>
            <AppAppBar/>
            <Container>
                <br/>
                <Paper>
                    <br/>
                    <div style={{padding: 10, marginLeft: -40 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} lg={4}>
                                <div style={{ display: 'flex', justifyContent: 'center'}}>
                                    <Tooltip title="Logo">
                                        <Avatar variant="circular" style={{ backgroundColor: 'blue' }}>
                                            <HotelRounded />
                                        </Avatar>
                                    </Tooltip>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Typography variant={"h4"}>
                                    {items.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Rating name="half-rating-read" value={parseFloat(items.rating)} precision={0.5} readOnly />
                            </Grid>
                            <Grid item xs={12} md={6} lg={12}>
                                <AddLocation />
                                <Typography variant={"subtitle2"}>
                                    {items.address}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <Carousel
                        data={items.subImages == null ? data:items.subImages}
                        time={5000}
                        width="850px"
                        height="450px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={false}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                    <div style={{paddingTop: 40, paddingLeft: 100, paddingRight: 100, paddingBottom: 40}}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit((data) => {
                                    const requestOptions = {
                                        method: 'POST',
                                        headers: {'Content-Type':'application/json'},
                                        body: JSON.stringify({
                                            "UserId": "raven",
                                            "CheckIn": data.CheckIn,
                                            "CheckOut": data.CheckOut,
                                            "Adults": data.Adults,
                                            "Children": data.Children,
                                            "RoomType": data.RoomType,
                                            "Rooms": data.Rooms,
                                            "Email": data.email,
                                            "Phone": data.phone
                                        })
                                    };
                                    console.log(requestOptions)
                                    fetch('http://localhost:5000/reserve', requestOptions)
                                        .then(() => {
                                            console.log("Reservation successful")
                                            if(items.prePayment == null){
                                                navigate('/Hotels')
                                            }else {
                                                navigate('/Payment')
                                            }
                                        })
                                        .catch(console.error)
                                }
                            )}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} lg={6}>
                                    <TextField
                                        type="date"
                                        margin="normal"
                                        fullWidth
                                        label="Check-in date"
                                        InputProps={{ inputProps: { min: NowDate } }}
                                        autoFocus
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        {...register('CheckIn')}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                    <TextField
                                        type="date"
                                        margin="normal"
                                        fullWidth
                                        label="Check-out date"
                                        InputProps={{ inputProps: { min: NowDate } }}
                                        autoFocus
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        {...register('CheckOut')}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} lg={3}>
                                    <TextField
                                        type="number"
                                        margin="normal"
                                        fullWidth
                                        label="Adults"
                                        InputProps={{ inputProps: { min: 1, max: 10 } }}
                                        autoFocus
                                        {...register('Adults')}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <TextField
                                        type="number"
                                        margin="normal"
                                        fullWidth
                                        label="Children"
                                        InputProps={{ inputProps: { min: 0, max: 10 } }}
                                        autoFocus
                                        {...register('Children')}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormControl fullWidth sx={{marginTop: 2}}>
                                        <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
                                        <Select
                                            label="Room Type"
                                            margin="normal"
                                            fullWidth
                                            autoFocus
                                            {...register('RoomType')}
                                        >
                                            <MenuItem value={10}><><Bed />&nbsp;&nbsp;Double Room</></MenuItem>
                                            <MenuItem value={20}><SingleBed/>&nbsp;&nbsp;Twin Room</MenuItem>
                                            <MenuItem value={30}><SingleBedTwoTone/>&nbsp;&nbsp;Superior Twin Room</MenuItem>
                                            <MenuItem value={40}><KingBed />&nbsp;&nbsp;Deluxe Double Room</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <TextField
                                        type="number"
                                        margin="normal"
                                        fullWidth
                                        label="Rooms"
                                        InputProps={{ inputProps: { min: 1, max: 10 } }}
                                        autoFocus
                                        {...register('Rooms')}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} lg={6}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        label="Email"
                                        autoFocus
                                        {...register('email')}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                    <TextField
                                        type="number"
                                        margin="normal"
                                        fullWidth
                                        label="Phone Number"
                                        autoFocus
                                        {...register('phone')}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Reserve
                            </Button>
                        </Box>
                    </div>
                </Paper>
                <br/>
            </Container>
            <Footer/>
        </div>
    )
}