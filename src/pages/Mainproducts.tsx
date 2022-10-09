import t1 from "./images/one-s.png";

export interface ProductsProps {
  name: string;
  price: number;
  img: any;
  _id: number;
}
// images\three-s.png

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
    img: "./images/two-s.png",
    _id: 2,
  },
  {
    name: "Tshirt (Blue)",
    price: 100,
    img: "./images/three-s.png",
    _id: 3,
  },
  {
    name: "Pant (black)",
    price: 100,
    img: "./images/one-p.png",
    _id: 4,
  },
  {
    name: "Pant (shriBlue)",
    price: 150,
    img: "./images/two-p.png",
    _id: 5,
  },
  {
    name: "Pant (Blue)",
    price: 100,
    img: "./images/three-p.png",
    _id: 6,
  },
];
