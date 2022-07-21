import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    name  : {
        type: String,
    },
    mobileno  : {
        type: Number
    },
    password  : {
        type: String,   
    },
    
}, {timestamps: true})



const UserModel = mongoose.model('User', UserSchema)

export default UserModel