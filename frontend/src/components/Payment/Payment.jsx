import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import "./payment.css";
import {useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";

const Payment = () => {
  const { amount } = useParams();
  const [CHN, setCHN] = useState("");
  const [CN, setCN] = useState(0);
  const [cvc, setCvc] = useState(0);
  const [mail, setMail] = useState('');

  const handleSubmit = () => {
    const data = {
      crdHolderName: CHN,
      crdNumber: CN,
      exp_date: Date.now(),
      cvc: cvc,
    };

    axios
      .post(`http://localhost:8280/payment/process`, data)
      .then((res) => {
        console.log("wada");
      })
      .catch((e) => {
        console.log(e.message);
      });

      axios
        .post(`http://localhost:8280/send/email`, {
          email: mail,
        })
        .then((res) => {
          alert("Email Sent!");
        })
        .catch((e) => {
          console.log(e.message);
        });

        window.location.href = '/taxiService'
  };

  console.log(amount)

  return (
    <div className="paymentMain">
      <div className="caption">Payment Gateway</div>
      <Typography variant={"h5"}>
        Pre Payment Amount Rs.{amount}
      </Typography>
      <div className="cardDetails">
        <TextField
          onChange={(e) => {
            setCHN(e.target.value);
          }}
          type = 'text'
          label="Cardholder's name"
        />
        <TextField
          onChange={(e) => {
            setCN(e.target.value);
          }}
          type = 'number'
          label="Card number"
        />
        <TextField
          onChange={(e) => {
            setCvc(e.target.value);
          }}
          type = 'number'
          label="cvc"
        />
        <TextField
          onChange={(e) => {
            setMail(e.target.value);
          }}
          type = 'email'
          label="email"
        />
        <Button type="button" onClick={() => handleSubmit()}>
          Confirm Payment
        </Button>
      </div>
    </div>
  );
};

export default Payment;
