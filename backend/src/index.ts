const express = require("express")
const app = express();
import {createConnection} from 'typeorm'



createConnection()
  .then(() => {

    app.listen(3000, function () {
      console.log("Backend server running");
    });

  })
  .catch((e) =>{
    console.log(e);
  })