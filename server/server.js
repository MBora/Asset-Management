const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser")

dotenv.config();

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
    console.log("Database connected")
);

// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// const PORT = process.env.PORT || 5000;
app.use("/app", routesUrls);
app.listen(4000, () => console.log(`server is up and running`));
