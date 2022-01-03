const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products'
  });
})

router.post('/', (req, res, next) => {
  res.status(200).json({
    finish: 'Its nice'
  });
})

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'Special combo'
    })
  } else {
    console.log(id)
    res.status(212).json({
      message: 'This is an ID',
      value: `${typeof(id)} is the value of ID(${id}) var.`
    })
  }
})

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Atualizado'
  });
})

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deletado'
  });
})

module.exports = router;