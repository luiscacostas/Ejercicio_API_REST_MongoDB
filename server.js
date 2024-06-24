require('dotenv').config();
const express = require('express')
const cowsay = require('cowsay')
const app = express()
const port = 3000

// Middlewares
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas
//const productsApiRoutes = require("./routes/productsApi.routes")
const providerRoutes = require('./routes/providers.routes');
const productRoutes = require('./routes/products.routes');
// const entriesApiRoutes = require("./routes/entriesApi.routes")

app.use(express.json());

// Rutas
app.use('/api/providers', providerRoutes);
app.use('/api/products', productRoutes);

app.use('*',error404);

app.listen(port, () => {
  console.log(
      cowsay.say({
          text: `Nos vamos a por tortilla. Funcionando en: http://localhost:${port}`,
          e: "oO",
          T: "U "
      }))
})