const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome To Student Portal</h1>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        `)
});


app.get("/about", (req, res) => {

    res.send("<h1>Powered By Express</h1> <p>This Is An Express App</p>")
});


app.get("/contact", (req, res) => {
    res.send("<h1>Name : <YOUR-NAME-HERE> <br><br>Email : <YOUR-EMAIL-HERE></h1>");
});


app.listen(port, () => {
    console.log(`\nServer Listening On : http://localhost:${port}\n`);
})