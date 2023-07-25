import { config } from "dotenv";
import { join } from "path";

// env variables
config({ path: join(__dirname, `.env.${process.env}`) });
const { MONGODB_URI, PORT } = process.env;

// app
import App from "app";

const app = new App(MONGODB_URI).app;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
