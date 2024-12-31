
import express from "express";
import nodemailer from "nodemailer";
import validate from 'email-validator';
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));
app.get("/", (req, res) => {
res.render("index.ejs");
});

app.get("/about", (req, res) => {
res.render("about.ejs");
});

app.get("/contact", (req, res) => {
res.render("contact.ejs");
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});