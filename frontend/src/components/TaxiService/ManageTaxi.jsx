import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ManageTaxi() {

  const [data, setData] = useState({});

  const email = sessionStorage.getItem("user")
  console.log(email)

  const formData = new FormData();

  formData.append("email", email);

  useEffect(() => {
    axios.get(`http://localhost:3002/customer/view-bookings`, formData).then(res => {
      setData(res.data)
    }).catch(e => {
      console.log(e.message);
    })
  })

  return (
    <div>
        {
          data.map((booking) => {
            <div>
              {booking.name}
            </div>
          })
        }
    </div>
  )
}

export default ManageTaxi