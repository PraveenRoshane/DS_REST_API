import Reserve from '../models/reserve.js'

export const getReserveFromDb = async (id) => {
    const data = await Reserve.findOne({id: id})
    return data;
};
export const getUserReserveFromDb = async (id) => {
    const data = await Reserve.find({UserId: id})
    return data;
};
export const createReserveInDb = async (hotel) => {
    var newHotel = new Reserve(hotel);
    newHotel.save();
    return hotel;
};
export const getAllReservesFromDb = async () => {
    const data = await Reserve.find();
    return data;
}
export const updateReserveFromDb = async (id, ctx) => {
    const data = await Reserve.updateOne({id: id}, ctx);
    return data;
};
export const deleteReserveFromDb = async (id) => {
    const data = await Reserve.deleteOne({_id: id});
    return data;
};