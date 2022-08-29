const express = require('express');
const faker = require('faker');


const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Hola me llamo jeronimo ");
});

app.get("/products", (req, res) =>{
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
    



app.get('/products/:id', (req, res) =>{
  const {id} = req.params;
  res.json({
    id
    ,
    name:'product 1',
    price:'2000'
  });
})
app.get('/users',(req,res) => {
  const{limit,offset}=req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{ 
    res.send('no hay parametros');
  }
  });




app.get('/categories/:categoryId/products/:productsId', (req, res) => { 
  const {categoryId,productsId} = req.params;
  res.json({
    categoryId,
    productsId
  });
})

  
  

app.listen(port, () =>{
  console.log("My port: " + port);
});