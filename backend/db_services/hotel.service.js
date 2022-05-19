import Hotel from '../models/hotel.js'

export const getHotelFromDb = async (hotelId) => {
    const data = await Hotel.findOne({hotelId: hotelId})
    return data;
};
export const createHotelInDb = async (hotel) => {
    var newHotel = new Hotel(hotel);
    newHotel.save();
    return hotel;
};
export const getAllHotelsFromDb = async () => {
    const data = await Hotel.find();
    return data;
}