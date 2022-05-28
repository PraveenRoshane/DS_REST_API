import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container, Grid,
    Paper, TextField,
    Typography
} from "@mui/material";
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useForm} from "react-hook-form";
import AppAppBar from "../home/modules/views/AppAppBar";
import {LocationCity} from "@mui/icons-material";
import Footer from "../footer/Footer";
import {useEffect, useState} from "react";
import hotel from "../axios/HotelAPI";
import api from "../axios/HotelAPI";

const backgroundImage = 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

export default function UpdateHotel(){
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, setValue, handleSubmit } = useForm({
        mode: 'all'
    });

    useEffect(() => {
        api.hotel.getHotelById(id)
            .then(data => {
                setValue("ownerName", data.ownerName)
                setValue("name", data.name)
                setValue("description", data.description)
                setValue("address", data.address)
                setValue("prePayment", data.prePayment)
                setValue("category", data.category)
                setValue("rating", data.rating)
                setValue("mainImage", data.mainImage)
                data.subImages.map((item, key) => {
                    setValue("subImageURL" + key, item.image)
                    setValue("subImageCap" + key, item.caption)
                })
            })
            .catch(console.error)
    }, [])

    return(
        <div style={{backgroundColor: 'lightcyan', height:"160vh"}}>
            <AppAppBar/>
            <br/>
            <Container component={Paper} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main', height: 100, width: 100}}>
                    <LocationCity sx={{height: 70, width: 70}} />
                </Avatar>
                <br/>
                <Typography component="h1" variant="h5">
                    Enter Your Hotel Details
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit((data) => {
                        const requestbody = {
                            ownerName: data.ownerName,
                            name: data.name,
                            description: data.description,
                            address: data.address,
                            prePayment: data.prePayment,
                            category: data.category,
                            rating: data.rating,
                            mainImage: data.mainImage,
                            subImages: [
                                {
                                    image: data.subImageURL1,
                                    caption: data.subImageCap1
                                },
                                {
                                    image: data.subImageURL2,
                                    caption: data.subImageCap2
                                },
                                {
                                    image: data.subImageURL3,
                                    caption: data.subImageCap3
                                },
                                {
                                    image: data.subImageURL4,
                                    caption: data.subImageCap4
                                },
                                {
                                    image: data.subImageURL5,
                                    caption: data.subImageCap5
                                },
                                {
                                    image: data.subImageURL6,
                                    caption: data.subImageCap6
                                },
                                {
                                    image: data.subImageURL7,
                                    caption: data.subImageCap7
                                },
                                {
                                    image: data.subImageURL8,
                                    caption: data.subImageCap8
                                },
                                {
                                    image: data.subImageURL9,
                                    caption: data.subImageCap9
                                }
                            ]
                        }
                        api.hotel.updateHotel(id, requestbody)
                            .then((response) => {
                                console.log(response)
                                console.log("Updated successful")
                                navigate('/Hotels')
                            })
                            .catch(console.error)
                        }
                    )}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        focused={true}
                        label="Owner Full Name"
                        {...register('ownerName')}
                    />
                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        focused={true}
                        label="Hotel Name"
                        {...register('name')}
                    />
                    <TextField
                        required
                        margin="normal"
                        focused={true}
                        multiline
                        rows={4}
                        label="Hotel Description"
                        fullWidth
                        {...register('description')}
                    />
                    <TextField
                        required
                        margin="normal"
                        focused={true}
                        fullWidth
                        label="Hotel Address"
                        {...register('address')}
                    />
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                type={"number"}
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Hotel Reservation Prepayment Amount (Rs.)"
                                {...register('prePayment')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Hotel Category"
                                {...register('category')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                type={"number"}
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Hotel 5 Star Rating"
                                InputProps={{ inputProps: { min: 0, max: 5 } }}
                                {...register('rating')}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        required
                        margin="normal"
                        focused={true}
                        fullWidth
                        label="Hotel Main Image URL"
                        {...register('mainImage')}
                    />
                    <hr/>
                    <Typography variant={"h6"}>
                        Add Sub Images of your hotel
                    </Typography>
                    <hr/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Image URL"
                                {...register('subImageURL0')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Caption"
                                {...register('subImageCap0')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Image URL"
                                {...register('subImageURL1')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Caption"
                                {...register('subImageCap1')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Image URL"
                                {...register('subImageURL2')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Caption"
                                {...register('subImageCap2')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Image URL"
                                {...register('subImageURL3')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Caption"
                                {...register('subImageCap3')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Image URL"
                                {...register('subImageURL4')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Caption"
                                {...register('subImageCap4')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Image URL"
                                {...register('subImageURL5')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Caption"
                                {...register('subImageCap5')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Image URL"
                                {...register('subImageURL6')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Caption"
                                {...register('subImageCap6')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Image URL"
                                {...register('subImageURL7')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Caption"
                                {...register('subImageCap7')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Image URL"
                                {...register('subImageURL8')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                focused={true}
                                fullWidth
                                label="Caption"
                                {...register('subImageCap8')}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                </Box>
            </Container>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>

    )
}
