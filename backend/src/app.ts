import express from "express";
// db connect
import { connect as dbConnect } from "./config/database";

export default class App {
    app: express.Application;

    constructor(dbURI: string) {
        this.configDb(dbURI);
        this.app = express();
    }

    private configMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private configDb(dbURI: string): void {
        dbConnect(dbURI);
    }
}
