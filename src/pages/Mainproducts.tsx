import t1 from "./images/one-s.png";

export interface ProductsProps {
  name: string;
  price: number;
  img: any;
  _id: number;
}

export const products: ProductsProps[] = [
  {
    name: "Tshirt (black)",
    price: 100,
    img: { t1 },
    _id: 1,
  },
  {
    name: "Tshirt (shriBlue)",
    price: 150,
    img: "./images/two-s",
    _id: 2,
  },
  {
    name: "Tshirt (Blue)",
    price: 100,
    img: "./images/three-s",
    _id: 3,
  },
  {
    name: "Pant (black)",
    price: 100,
    img: "./images/one-p",
    _id: 4,
  },
  {
    name: "Pant (shriBlue)",
    price: 150,
    img: "./images/two-p",
    _id: 5,
  },
  {
    name: "Pant (Blue)",
    price: 100,
    img: "./images/three-p",
    _id: 6,
  },
];
