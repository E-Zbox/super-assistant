import { connect as mongooseConnect } from "mongoose";

export const connect = async (dbURI: string) => {
    try {
        await mongooseConnect(dbURI, {
            dbName: "super-assistant-form-builder",
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
