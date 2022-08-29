const express = require('express');
const faker = require('faker');

const router= express.Router();

router.app.get("", (req, res) =>{
    const products=[];
    for (let index = 0; index < 100; index++) {
    products.push({
      name:faker.commerce.productName(),
      price:parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
  });

  reouter.get('/filter',(req,res)=>{
    res.send('yo soy un filter');
  });
  
   
  router.get('/:id', (req, res) =>{
    const {id} = req.params;
    res.json({
      id
      ,
      name:'product 1',
      price:'2000'
    });
  });

  module.exports = router;

  
  