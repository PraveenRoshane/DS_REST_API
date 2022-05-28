import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/'
axios.defaults.withCredentials = false;

const responseBody = (response) => response.data;

const request = {
    get: (url, params) => axios.get(url,{params}).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
}

const hotel = {
    addHotel: (values) => request.post('hotels', values),
    updateHotel: (id, values) => request.put(`hotels/${id}`, values),
    getHotels: () => request.get('hotels'),
    getHotelById: (id) => request.get(`hotels/${id}`),
    getMyHotels: (id) => request.get(`hotels/user/${id}`),
}

const reservation = {
    addReservation: (values) => request.post('reserve', values),
    getMyReservations: (id) => request.get(`reserve/user/${id}`),
    deleteReservation: (id) => request.delete(`reserve/delete/${id}`),
}

const user = {
    addUser: (values) => request.post('user', values),
    userVerify: (values) => request.post('user/verify', values),
    getUserById: (id) => request.get(`user/${id}`),
}

const api = {
    hotel,
    reservation,
    user
}

export default api;