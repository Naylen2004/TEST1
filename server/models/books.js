/**
 * File name:    books.js **  Model
 * Student name: Krishna Ramlakhan
 * Student ID:   818583171 
 * Date:         March 1st, 2023 
 * App Name: Book List
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    timestamps: true,
    collection: 'books'
});

export default mongoose.model('Books', BookSchema);