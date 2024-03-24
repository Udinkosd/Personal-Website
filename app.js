import express from "express";
import cors from "cors";
import router from "./assets/routes/router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use("/", express.static("public"));

const port = 5501;

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:`+ port);
});
