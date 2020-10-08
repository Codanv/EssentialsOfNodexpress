const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;

const employeeRoute = require("./employeeRoute");
const userRoute = require("./userRoute");

async function init() {
    try {
        await mongoose.connect(process.env.CONNECT_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        const app = express();

        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
      
        app.use("/employees", employeeRoute);
        app.use("/users", userRoute);
             
        app.listen(port, () => {
          console.log(`Server is up and running http://localhost/${port}`);
        })
    } catch(err) {
        console.log('Server Error: something went wrong')
    }
}

init();


/*
-:Terminal:-

curl http://localhost:3001/employees
---
curl -X POST -H "Content-Type: application/json" --data '{"id": "tt0109830", "name": "Forrest
Gump", "genre": "drama"}' http://localhost:4000/items
--
curl -X POST -H "Content-Type: application/json" --data '{"name": "Rozer", "designation": "CEO"}' http://localhost:3001/employees
*/
