import Express,{Router, json} from "express";
import dotenv from "dotenv";
dotenv.config();
const { API_URL } = process.env;
const app = Express();

//routers
import userRouter from "./src/modules/user/user.route";

app
  .use(json())
  .use(`${API_URL}user/`, userRouter)
  .use("*", (req, res) => {
     return res.status(404).send("Not found...");
});
app.listen(3000, function() {
    console.log(API_URL);
    console.log("Server is running at port 3000");
});
