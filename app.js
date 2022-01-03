const express = require('express');
const app = express()

const productRoutes = require('./api/routes/products')

app.use('/products', productRoutes)

app.use((req, res, next) => {
  res.status(200).json({
    message: 'Funciona'
  })
})

module.exports = app;