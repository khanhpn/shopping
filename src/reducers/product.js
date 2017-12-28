var initialState = [
  {
    id: 0,
    name: "Iphone 6 plus",
    image: "",
    description: "Made in china",
    price: 500,
    inventory: 10
  },
  {
    id: 1,
    name: "Samsung galaxy",
    image: "",
    description: "Made in korea",
    price: 400,
    inventory: 10
  },
  {
    id: 2,
    name: "Macbook pro",
    image: "",
    description: "Made in us",
    price: 900,
    inventory: 6
  }
];

const product = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default product;
