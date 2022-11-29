import { app } from "./server";
import * as dotenv from "dotenv";
const port = 5000;

dotenv.config();

// creates and starts a server for our API on a defined port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
