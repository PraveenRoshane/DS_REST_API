import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: String,
    hotelId: String,
    ownerName: String,
    name: String,
    description: String,
    address: String,
    prePayment: String,
    category: String,
    rating: String,
    mainImage: String,
    subImages: Object,
});
export default mongoose.model('Hotel', UserSchema);