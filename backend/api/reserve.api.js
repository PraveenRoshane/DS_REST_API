import {createReserveInDb, getReserveFromDb, getAllReservesFromDb, updateReserveFromDb, deleteReserveFromDb} from '../db_services/reserve.service.js'

export const save = async ({UserId, CheckIn, CheckOut, Adults, Children, RoomType, Rooms, Email, Phone}) => {
    const ctx = {UserId, CheckIn, CheckOut, Adults, Children, RoomType, Rooms, Email, Phone};
    const reserve = await createReserveInDb(ctx);
    return reserve;
}

export const getById = async (id) => {
    const reserve = await getReserveFromDb(id);
    if (!reserve) {
        throw new Error(`Not found data`)
    }
    return reserve;
}

export const getAll = async () => {
    const reserves = await getAllReservesFromDb();
    return reserves;
}

export const update = async (id, {UserId, CheckIn, CheckOut, Adults, Children, RoomType, Rooms, Email, Phone}) => {
    const ctx = {UserId, CheckIn, CheckOut, Adults, Children, RoomType, Rooms, Email, Phone};
    const reserve = await updateReserveFromDb(id, ctx);
    if (!reserve) {
        throw new Error(`Not found data`)
    }
    return reserve;
}

export const deletePost = async (id) => {
    const reserve = await deleteReserveFromDb(id);
    if (!reserve) {
        throw new Error(`Not found data`)
    }
}