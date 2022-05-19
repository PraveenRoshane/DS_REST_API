import {createHotelInDb, getAllHotelsFromDb, getHotelFromDb} from '../db_services/hotel.service.js'

const hotels = new Map();

export const save = async ({ownerName, name, description, address, prePayment, category, rating, mainImage, subImages}) => {
    let data = [];
    data = await getAllHotelsFromDb();
    let max = 0;
    data.forEach( (item) => {
            if(parseInt(item.hotelId) > max){
                max = item.hotelId;
            }
        }
    )

    const ctx = {hotelId: parseInt(max)+1, ownerName, name, description, address, prePayment, category, rating, mainImage, subImages};
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

export const getAll = async () => {
    const data = await getAllHotelsFromDb();
    return data;
}

export const update = (id, {ownerName, name, description, address, prePayment, category, rating, mainImage, subImages}) => {
    if(!hotels.has(id)){
        throw new Error(`Not found the hotel from this ID ${id}`);
    }
    const hotel = {ownerName, name, description, address, prePayment, category, rating, mainImage, subImages};
    hotels.set(hotel.id, hotel);
    return hotel;
}

export const deletePost = (id) => {
    if(!hotels.has(id)){
        throw new Error(`Not found the hotel from this ID ${id}`);
    }
    hotels.delete(id)
}