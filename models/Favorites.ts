const mongoose = require('mongoose');
require("./Users");
require("./Courses");

const FavoritesSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    courseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true 
    }
});

const Favorites = mongoose.models.Favorites || mongoose.model('Favorites', FavoritesSchema);
export default Favorites;
