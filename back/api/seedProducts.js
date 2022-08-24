const seedProducts =[ 
  {
    "tittle": "skinny vainilla latte",
    "drink": true,
    "food": false,
    "description":
    "Café espresso con leche descremada al vapor y toques de vainilla sin azúcar.",
    "price": 10,
    "stock": 4,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSkinny%20Vainilla%20Latte%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "latte macchiato",
    "drink": true,
    "food": false,
    "description":
      "Leche vaporizada con shots de café espresso que finaliza con un punto dibujado en la superficie.",
    "price": 15,
    "stock": 6,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FLatte%20Macchiato%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "cappuccino",
    "drink": true,
    "food": false,
    "description": "Café espresso, leche vaporizada y abundante espuma de leche.",
    "price": 20,
    "stock": 3,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCappuccino%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "latte",
    "drink": true,
    "food": false,
    "description":
      "Café espresso con leche vaporizada.",
    "price": 25,
    "stock": 5,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFlat%20White%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "flat white",
    "drink": true,
    "food": false,
    "description":
      "Shots de café ristretto con leche vaporizada que finaliza con un punto dibujado en la superficie.",
    "price": 25,
    "stock": 5,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFlat%20White%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "americano",
    "drink": true,
    "food": false,
    "description":
      "Café espresso combinado con agua al mejor estilo americano.",
    "price": 30,
    "stock": 2,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FAmericano%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "mocha blanco",
    "drink": true,
    "food": false,
    "description":
      "Chocolate blanco, shots de Espresso y leche vaporizada, con crema batida.",
    "price": 40,
    "stock": 10,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMocha%20blanco%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "mezzaluna rellena con jamón y queso",
    "drink": false,
    "food": true,
    "description":
      "Nuestra Mezzaluna recién horneada, rellena con queso tybo y jamón cocido.",
    "price": 10,
    "stock": 4,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMezzaluna-rellena-425-x-425_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  
  {
    "tittle": "croissant",
    "drink": false,
    "food": true,
    "description":
      "Elaborado con masa de hojaldre crujiente y salada, nuestro Croissant se hornea especialmente para vos.",
    "price": 25,
    "stock": 10,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCroissant-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
 
  {
    "tittle": "mezzaluna",
    "drink": false,
    "food": true,
    "description":
      "La clásica medialuna reversionada a la manera de Starbucks: Crujiente, esponjosa, de mayor tamaño y ¡recién horneada!",
    "price": 15,
    "stock": 5,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMezzaluna-425-x-425_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "chocolate croissant",
    "drink": false,
    "food": true,
    "description":
      "Exquisita masa de hojaldre rellena de chocolate semiamargo y horneado especialmente para vos.",
    "price": 18,
    "stock": 3,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChocolate-Croissant-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "double choco brownie",
    "drink": false,
    "food": true,
    "description":
      "Brownie húmedo de chocolate.",
    "price": 20,
    "stock": 6,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FDouble-Choco-Brownie-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
      {
    "tittle": "roll de canela",
    "drink": false,
    "food": true,
    "description":
      "Anillo de suave masa horneada relleno con canela.",
    "price": 12,
    "stock": 3,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FRoll-de-Canela-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  },
  {
    "tittle": "croissant relleno con crema de avellanas",
    "drink": false,
    "food": true,
    "description":
      "Croissant con masa de hojaldre y cubierto con una salsa de cacao y avellanas.",
    "price": 12,
    "stock": 3,
    "image":
      "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCroissant-Relleno-Avellana-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
  }
  
];


// const seedFn = () => {

//   const seedObj= seed.map((elem)=>{
//   const { categories } = elem;
//   const { name } = categories;
//   Categories.findOrCreate({
//     where: { name },
//   })
//     .then((data) => {
//       const category = data[0];
//       Products.create(elem)
//         .then((product) => product.setCategories(category))
//     })
//     .catch(err=> console.log(err));})
// };

// seedFn();


module.exports = seedDrinks