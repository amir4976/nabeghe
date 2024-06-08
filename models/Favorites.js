const mongoose = require('mongoose');


const FavoritesSchema = new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Courses',
        required:true
    }
})

export default mongoose.models.Favorites || mongoose.model('Favorites', FavoritesSchema);