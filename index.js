require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const { routes } = require('./src/routes');

//подключение к БД
mongoose.set('strictQuery',false);
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log(`Connected to database`);
    })
    .catch((e) => {
        console.log(`Error!`);
    });

// инициализируем приложение
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`));
  });
   

// объявим наши  роуты
const PORT = 3000;
http.createServer({}, app).listen(PORT);
console.log(`Server running at ${PORT}`);

