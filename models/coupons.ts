const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CouponsSchema = Schema({
    code:{
        type:String,
        required:true
    }
    ,persent:{
        type:Number,
        required:true
    },
    maxUse:{
        type:Number,
        required:true,
    },
    uses:{
        type:Number,
        default:0
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"Course",
        required:true
    }
})

export default mongoose.models.Coupons || mongoose.model("Coupons",CouponsSchema)