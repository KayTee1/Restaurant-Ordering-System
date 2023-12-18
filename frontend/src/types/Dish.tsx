type Item = {
  id: string;
  quantity?: number;
};

type Dish = Item & {
  name: string;
  price: string;
  description: string;
  image: string;
};

export default Dish;
