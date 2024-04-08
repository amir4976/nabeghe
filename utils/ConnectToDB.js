import mongoose from "mongoose"
const ConnectToDB = () => { 
    try {
        if(mongoose.connections[0].readyState === 0) {
            const db = mongoose.connect("mongodb://localhost:27017/Nabeghe");
            console.log("connected to db")
        }
    } catch (error) {
        console.log(error)
    }
}

export default ConnectToDB