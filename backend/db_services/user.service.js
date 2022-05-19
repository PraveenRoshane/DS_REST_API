import User from '../models/user.js'

export const getUserFromDb = async (id) => {
    const data = await User.findOne({email: id})
    return data;
};
export const createUserInDb = async (user) => {
    var newuser = new User(user);
    newuser.save();
    return user;
};
export const verifyUserInDb = async ({email, password}) => {
    const data = await User.findOne({email: email, password: password})
    return data;
}
// export const getAllReservesFromDb = async () => {
//     const data = await Reserve.find();
//     return data;
// }
// export const updateReserveFromDb = async (id, ctx) => {
//     const data = await Reserve.updateOne({id: id}, ctx);
//     return data;
// };
// export const deleteReserveFromDb = async (id) => {
//     const data = await Reserve.delete({id: id})
//     return data;
// };