import { Schema, Types } from "mongoose";

const { ObjectId } = Types;

export const FormSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    header_image: {
        type: String,
        required: false,
    },
    pages: {
        type: [ObjectId],
    },
});
