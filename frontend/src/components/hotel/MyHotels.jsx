import {
    Box,
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
import {Add, Delete, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import AppAppBar from "../home/modules/views/AppAppBar";
import Footer from "../footer/Footer";
import {useNavigate} from "react-router-dom";
import hotel from "../axios/HotelAPI";
import data from "bootstrap/js/src/dom/data";
import api from "../axios/HotelAPI";

export default function MyHotels(){
    const navigate = useNavigate();
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        api.hotel.getMyHotels(sessionStorage.getItem("user"))
            .then(data => setHotels(data))
            .catch(error => console.error(error))
    }, []);

    return(
        <div style={{backgroundColor: 'lightcyan', height:"160vh"}}>
            <AppAppBar/>
            <br/>
            <Container>
                <hr/>
                <Typography component="h1" variant="h5">
                    My Hotels
                </Typography>
                <hr/>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Pre Payment Amount</TableCell>
                                <TableCell align="right">Rating</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {hotels.map(row => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Box display='flex'>
                                            <img src={row.mainImage} alt={row.name} style={{ height: 100, marginRight: 20, width: 100 }} />
                                            <span>{row.name}</span>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="right">{row.prePayment}</TableCell>
                                    <TableCell align="right">{row.rating}</TableCell>
                                    <TableCell align="right" width={20}>
                                        <Button
                                            onClick={() => navigate(`/Hotels/update/${row.hotelId}`)}>
                                            <Edit />
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right" width={20}>
                                        <Button
                                            onClick={() => console.log("delete")}>
                                            <Delete />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
                <Button
                    variant={"contained"}
                    onClick={() => navigate('/HotelsAdd')}>
                    <Add />
                    Add New Hotel
                </Button>
            </Container>
            <br/>
            <Footer/>
        </div>
    )
}