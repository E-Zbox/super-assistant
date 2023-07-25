import { Schema, Types } from "mongoose";

const { ObjectId } = Types;

const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        qcategorize: {
            type: ObjectId,
            required: true,
        },
    },
    { _id: false }
);

const oCategorizeSchema = new Schema(
    {
        title: String,
        category: {
            type: ObjectId,
            required: true,
        },
    },
    { _id: false }
);

const optionSchema = new Schema(
    {
        title: String,
        value: {
            type: String,
            required: true,
        },
        qcloze: {
            type: ObjectId,
            required: true,
        },
    },
    { _id: false }
);

const qCategorizeSchema = new Schema(
    {
        num: {
            type: Number,
            required: true,
        },
        categories: {
            type: [categorySchema],
            required: true,
        },
        categorize_options: {
            type: [oCategorizeSchema],
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    { _id: false }
);

const qClozeSchema = new Schema(
    {
        answer_options: {
            type: [optionSchema],
            required: true,
        },
        form: {
            type: ObjectId,
            required: true,
        },
        num: {
            type: Number,
            required: true,
        },
        hasAnswer: Boolean,
        options: {
            type: [optionSchema],
            required: true,
        },
        title: {
            type: [String],
            required: true,
        },
    },
    { _id: false }
);

export const PageSchema = new Schema({
    number: {
        type: Number,
        required: true,
    },
    categorize_questions: {
        type: [qCategorizeSchema],
        required: true,
    },
    cloze_questions: {
        type: [qClozeSchema],
        required: true,
    },
});
