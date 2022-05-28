import {
    createHotelInDb,
    getAllHotelsFromDb,
    getHotelFromDb,
    getUserHotelFromDb,
    updateHotelFromDb
} from '../db_services/hotel.service.js'

const hotels = new Map();

export const save = async ({user, ownerName, name, description, address, prePayment, category, rating, mainImage, subImages}) => {
    let data = [];
    data = await getAllHotelsFromDb();
    let max = 0;
    data.forEach( (item) => {
            if(parseInt(item.hotelId) > max){
                max = item.hotelId;
            }
        }
    )

    const ctx = {hotelId: parseInt(max)+1, user, ownerName, name, description, address, prePayment, category, rating, mainImage, subImages};
    const hotel = await createHotelInDb(ctx);
    return hotel;
}

export const getById = async (id) => {
    const hotel = await getHotelFromDb(id);
    if (!hotel) {
        throw new Error(`Not found data`)
    }
    return hotel
}

export const getByUser = async (id) => {
    const hotel = await getUserHotelFromDb(id);
    if (!hotel) {
        throw new Error(`Not found data`)
    }
    return hotel
}

export const getAll = async () => {
    const data = await getAllHotelsFromDb();
    return data;
}

export const update = async (id, {
    ownerName,
    name,
    description,
    address,
    prePayment,
    category,
    rating,
    mainImage,
    subImages
}) => {
    // if(!hotels.has(id)){
    //     throw new Error(`Not found the hotel from this ID ${id}`);
    // }
    const hotel = {ownerName, name, description, address, prePayment, category, rating, mainImage, subImages};
    const data = await updateHotelFromDb(id, hotel);
    return data;
}

export const deletePost = (id) => {
    if(!hotels.has(id)){
        throw new Error(`Not found the hotel from this ID ${id}`);
    }
    hotels.delete(id)
}