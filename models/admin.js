import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    username:String,
    password:String
})

const Admin = mongoose.model('Admin',AdminSchema);

export default Admin;