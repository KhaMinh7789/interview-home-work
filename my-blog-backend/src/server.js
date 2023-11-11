const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const userRoute = require("./routes/UserRouter");
const postRoute = require("./routes/PostRouter");
const commentRoute = require("./routes/CommentRouter");

const port = process.env.PORT || 3001;

dotenv.config();
// CONNECT DATABASE
mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log("success connect DB!");
  })
  .catch((err) => {
    console.log("err");
  });

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

// ROUTES
app.use("/v1/user", userRoute);
app.use("/v1/post", postRoute);
app.use("/v1/comment", commentRoute);

app.listen(port, () => {
  console.log("Server is running in port: ", +port);
});
