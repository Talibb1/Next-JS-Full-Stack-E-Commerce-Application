
/* external imports */
const express = require("express");
const cors = require("cors");
require("dotenv").config();

/* internal import */
const error = require("./middleware/error.middleware");

/* application level connection */
const app = express();

/* middleware connections */
app.use(
  cors({
    // origin: process.env.ORIGIN_URL,
    origin: ["https://next-js-full-stack-e-commerce-application.vercel.app", "http://localhost:3000"],
    methods: "GET, PATCH, POST, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());

/* router level connections */
app.use("/api/brand", require("./routes/brand.route"));
app.use("/api/category", require("./routes/category.route"));
app.use("/api/product", require("./routes/product.route"));
app.use("/api/store", require("./routes/store.route"));
app.use("/api/user", require("./routes/user.route"));
app.use("/api/cart", require("./routes/cart.route"));
app.use("/api/favorite", require("./routes/favorite.route"));
app.use("/api/review", require("./routes/review.route"));
app.use("/api/payment", require("./routes/payment.route"));
app.use("/api/purchase", require("./routes/purchase.route"));

/* global error handler */
app.use(error);

/* connection establishment */
app.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "The request is OK",
    });
  } catch (err) {
    next(err);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
});

/* export application */
module.exports = app;
