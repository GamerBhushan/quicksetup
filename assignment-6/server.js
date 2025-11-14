const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "Text/HTML"
        });
        res.end(
            `<h1>My Collage </h1>
            <a href="/about">About</a>
            <a href="/contact" >Contact</a>
            `
        );

    } else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "Text/HTML"
        });
        res.end(`<h1>About</h1>
            <a href="/">Home</a>
            <a href="/contact" >Contact</a>
        `);

    } else if (req.url === "/contact" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "Text/HTML"
        });
        res.end(`<h1>Contact</h1>
            <a href="/">Home</a>
            <a href="/about" >About</a>
            `)
    } else {

        res.writeHead(404, { "content-type": "text/html" });
        res.end(`<h1>Page Not Found!</h1>`)
    }

});


server.listen(port, () => {
    console.log("\nServer Running At : http://localhost:3000\n");
});
