import {Card, CardContent, CardHeader, CardMedia, Zoom} from "@mui/material";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function HotelCard({ product }){
    return (
        <>
            <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                <Card key={product.hotelId} elevation={10}>
                    <CardHeader
                        // avatar={product.quantity <= 10 ? <Tooltip title="SOLD OUT"><Avatar variant="circular" style={{ backgroundColor: 'Red' }}>S</Avatar></Tooltip> :
                        //     <Tooltip title="AVAILABLE"><Avatar variant="circular" style={{ backgroundColor: 'orange' }}>A</Avatar></Tooltip>}
                        title={product.name}
                        //action={<IconButton aria-label="share"><ShareIcon /></IconButton>}
                    />
                    <Link to={`/Hotels/${product.hotelId}`}>
                        <CardMedia title={product.name}>
                            <img alt='' src={product.mainImage} width="250dp" height="250dp" />
                        </CardMedia>
                    </Link>
                    <br/>
                    <CardContent>
                        <Typography variant='h6' color='textSecondary' gutterBottom>
                            {product.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Zoom>
        </>
    )
}