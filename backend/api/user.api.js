import {createUserInDb, getUserFromDb, verifyUserInDb} from "../db_services/user.service.js";

export const save = async ({firstName, secondName, email, password}) => {
    const ctx = {firstName, secondName, email, password};
    const user = await createUserInDb(ctx);
    return user;
}

export const getById = async (id) => {
    let user = await getUserFromDb(id);
    if (!user) {
        user = {}
    }
    return user;
}

export const verifyUser = async (data) => {
    let user = await verifyUserInDb(data);
    if (!user) {
        user = {}
    }
    return user;
}

// export const getAll = async () => {
//     const reserves = await getAllReservesFromDb();
//     return reserves;
// }
//
// export const update = async (id, {UserId, CheckIn, CheckOut, Adults, Children, RoomType, Rooms}) => {
//     const ctx = {UserId, CheckIn, CheckOut, Adults, Children, RoomType, Rooms};
//     const reserve = await updateReserveFromDb(id, ctx);
//     if (!reserve) {
//         throw new Error(`Not found data`)
//     }
//     return reserve;
// }
//
// export const deletePost = async (id) => {
//     const reserve = await deleteReserveFromDb(id);
//     if (!reserve) {
//         throw new Error(`Not found data`)
//     }
// }