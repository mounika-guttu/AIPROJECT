const express = require("express");              // Requiring express
const app = express();                           // Storing in variable app
const port = 8080;
const path = require("path");                    // Requiring path
const methodOverride = require("method-override");// Middleware for put and delete operations

app.use(methodOverride("_method"));              // Implementing the middleware
app.use(express.urlencoded({ extended: true })); // Access URL-encoded data
app.use(express.static(path.join(__dirname, "public"))); // Public directory

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));// Setting the views directory

app.get("/posts", (req, res) => {
    res.render("index"); // No need to include the .ejs extension
});

app.get("/posts/main", (req, res) => {
    res.render("main"); // No need to include the .ejs extension
});

app.get("/posts/web",(req,res) => {
    res.render("web.ejs");
});

app.get("/posts/youtube",(req,res)=> {
    res.render("youtube.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
