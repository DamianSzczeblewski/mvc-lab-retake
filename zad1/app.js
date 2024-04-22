const http = require("http");

const CARS = require("./cars");
const HTML_GENERATOR = require("./htmlGenerator")

const PORT = 3000;

const id = 1;

const requestListener = (request, response) => {
    const cars = CARS.getCars();
    console.log(`${cars}`);
    response.setHeader("Content-Type", "text/html");
    response.write(HTML_GENERATOR.getHTMLDocumentStart());
    response.write(`<body>`);
    response.write(`<p>${CARS.getCarInformation(id)}</p>`);
    response.write(`<p>${CARS.getCarAge(id)}</p>`);
    response.write(`</body>`);
    response.write(`${HTML_GENERATOR.getHTMLDocumentEnd()}`);
    response.end();
};

const SERVER = http.createServer(requestListener);

SERVER.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});