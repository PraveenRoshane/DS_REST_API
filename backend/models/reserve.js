import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserId: String,
    CheckIn: String,
    CheckOut: String,
    Adults: String,
    Children: String,
    RoomType: String,
    Rooms: String
});
export default mongoose.model('Reserve', UserSchema);