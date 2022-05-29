const router = require("express").Router();
let TaxiBooking = require("../models/TaxiBooking.js");

router.route("/bookTaxi").post((req,res)=>{

    const username = req.body.username;
    const date = req.body.date;
    const email = req.body.email;

    const bookingDetails = new TaxiBooking({
        username: username,
        date: date,
        email: email
    })

    bookingDetails.save().then(()=>{
        res.json ("Taxi Booked Successful!")
    }).catch((err)=>{
        console.log(err.message);
    })
})

module.exports = router;