import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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