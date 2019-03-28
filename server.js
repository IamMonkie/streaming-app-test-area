const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

//if deployed, use the deployed database, otherwise use local climbingHeadlines database
const db = process.env.MONGODB_URI || "mongodb://localhost/userAccounts";

//connect mongoose to database
mongoose.connect(db, error => {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Mongoose connection successful");
  }
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
