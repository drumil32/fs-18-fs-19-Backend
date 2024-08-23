import axios from "axios";
import http from "http";

let cars = [
    { id: 1, model: "tata", make: 2000 },
    { id: 2, model: "maruti", make: 2000 },
    { id: 3, model: "honda", make: 2000 },
    { id: 4, model: "mahindra", make: 2000 },
    { id: 5, model: "toyota", make: 2000 },
    { id: 6, model: "ford", make: 2000 },
];

const port = 8080;

// btn.addEventListener("click,", () => {})
// btn.addEventListener("hover,", () => {})

const helper = async () => {
    const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });
    return response.data;
}

const server = http.createServer(async (request, response) => {
    if (request.method === "GET") {
        response.writeHead(200, { "Content-Type": "application/json" });
        const joke = await helper();
        response.end(JSON.stringify({ joke }));
        // response.
        // response.sendFile('./linkedIn.png');

        // HEADER
        // status code
        // body

        // post
        // data successfully sotred inside database
        // 201
        // get
        // if we retrived the data from database
        // 200
        // if data don't found
        // 404
        // 403 => forbidden
        // 401 => Unauthorization
        // 500 => Internal Server Error
        // response.end(JSON.stringify(cars));
    }
    //    else if (request.method === "POST") {
    //     let newCar = "";
    //     request.on("data", (buffer) => {
    //       // console.log(buffer.toString());
    //       newCar += buffer.toString();
    //     });

    //     request.on("end", () => {
    //       // cars.push(JSON.parse(newCar));
    //       const newData = JSON.parse(newCar);
    //       cars = [...cars, ...newData];
    //       response.writeHead(201, { "Content-Type": "application/json" });
    //       response.end(JSON.stringify(cars));
    //     });
    //   } else if (request.method === "PUT") {
    //     let carToUpdate = "";
    //     request.on("data", (buffer) => {
    //       carToUpdate += buffer.toString();
    //     });

    //     request.on("end", () => {
    //       carToUpdate = JSON.stringify(carToUpdate);

    //       const updatedCars = JSON.stringify(
    //         cars.map((car) => {
    //           return car.id === carToUpdate.id ? carToUpdate : car;
    //         })
    //       );

    //       response.writeHead(200, { "Content-Type": "application/json" });
    //       response.end(JSON.stringify(updatedCars));
    //     });
    //   } else if (request.method === "DELETE") {
    //     // filter out id from request.url in a variable
    //     // apply filter on cars and filter out the object where id matches

    //   }
});

server.listen(port, () => {
    console.log("Server started at port " + port);
});

//Running scripts is disabled....

// //odemon : File C:\Users\anshu\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is disabled on this
// system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
// At line:1 char:1
// + nodemon .\puppet.js
// + ~~~~~~~
//     + CategoryInfo          : SecurityError: (:) [], PSSecurityException
//     + FullyQualifiedErrorId : UnauthorizedAccess

// GO to start -> Type Powershell -> Click on Run as Administrator
// Set-ExecutionPolicy Unrestricted