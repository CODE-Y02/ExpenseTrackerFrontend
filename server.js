const express = require("express");

const path = require("path");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

// console.log(process.env.RP_KEY);

app.use(express.static(path.join(__dirname, "public")));

// login

app.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "views", "login.html"));
  } catch (error) {
    console.log(error);
  }
});

app.get("/login", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "views", "login.html"));
  } catch (error) {
    console.log(error);
  }
});

// signup
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signUp.html"));
});

// reset pass
app.get("/passwordReset", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "passwordReset.html"));
});

// expense app
app.get("/expenses", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "expenses.html"));
});

// expense report
app.get("/expReport", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "expReport.html"));
});

//  leaderboard
app.get("/leaderboard", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "leaderboard.html"));
});

app.use((req, res) => {
  res.status(404).end(`<h1>PAGE NOT FOUND </h1>`);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `\n\n front end running @ PORT ==> ${process.env.PORT || 5000} \n`
  );
});
