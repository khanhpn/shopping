var initialState = [
  {
    id: 0,
    name: "Iphone 6 plus",
    image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "Made in china",
    price: 500,
    inventory: 10,
    rating: 6
  },
  {
    id: 1,
    name: "Samsung galaxy",
    image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleI" +
    "nc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_shar" +
    "pen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "Made in korea",
    price: 400,
    inventory: 10,
    rating : 4
  },
  {
    id: 2,
    name: "Macbook pro",
    image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleI" +
    "nc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_shar" +
    "pen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "Made in us",
    price: 900,
    inventory: 6,
    rating : 3
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default products;
