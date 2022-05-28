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
import {Add, Cancel, Delete, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import AppAppBar from "../home/modules/views/AppAppBar";
import Footer from "../footer/Footer";
import {useNavigate} from "react-router-dom";
import {red} from "@mui/material/colors";

export default function MyReservations(){
    const navigate = useNavigate();
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reserve/user/${sessionStorage.getItem("user")}`)
            .then(response => response.json())
            .then(data => setReservations(data))
            .catch(console.error)
    }, []);

    return(
        <div style={{backgroundColor: 'lightcyan', height:"160vh"}}>
            <AppAppBar/>
            <br/>
            <Container>
                <hr/>
                <Typography component="h1" variant="h5">
                    My Reservations
                </Typography>
                <hr/>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Hotel Name</TableCell>
                                <TableCell align="center">CheckIn</TableCell>
                                <TableCell align="center">CheckOut</TableCell>
                                <TableCell align="center">Adults</TableCell>
                                <TableCell align="center">Children</TableCell>
                                <TableCell align="center">No of Rooms</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reservations.map(row => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >{row.hotelName}</TableCell>
                                    <TableCell align="center">{row.CheckIn}</TableCell>
                                    <TableCell align="center">{row.CheckOut}</TableCell>
                                    <TableCell align="center">{row.Adults}</TableCell>
                                    <TableCell align="center">{row.Children}</TableCell>
                                    <TableCell align="center">{row.Rooms}</TableCell>
                                    <TableCell align="right" width={20}>
                                        <Button
                                            onClick={() => {
                                                fetch(`http://localhost:5000/reserve/delete/${row._id}`, { method: 'DELETE' })
                                                    .then((response) => {
                                                        window.location.reload()
                                                    })
                                                    .catch(console.error)
                                            }}>
                                            <Cancel color={"error"}/>
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
                    onClick={() => navigate('/Hotels')}>
                    <Add />
                    New Reservation
                </Button>
            </Container>
            <br/>
            <Footer/>
        </div>
    )
}