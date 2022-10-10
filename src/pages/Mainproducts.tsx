import t1 from "./images/one-s.png";
import t2 from "./images/two-s.png";
import t3 from "./images/three-s.png";
import p1 from "./images/one-p.png";
import p2 from "./images/two-p.png";
import p3 from "./images/three-p.png";

export interface ProductsProps {
  name: string;
  price: number;
  img: any;
  _id: number;
}

export const products: ProductsProps[] = [
  {
    name: "Tshirt",
    price: 100,
    img: [t1, t2, t3],
    _id: 1,
  },
  // {
  //   name: "Tshirt (shriBlue)",
  //   price: 150,
  //   img: t2,
  //   _id: 2,
  // },
  // {
  //   name: "Tshirt (Blue)",
  //   price: 100,
  //   img: t3,
  //   _id: 3,
  // },
  // {
  //   name: "Pant (black)",
  //   price: 100,
  //   img: p1,
  //   _id: 4,
  // },
  // {
  //   name: "Pant (shriBlue)",
  //   price: 150,
  //   img: p2,
  //   _id: 5,
  // },
  // {
  //   name: "Pant (Blue)",
  //   price: 100,
  //   img: p3,
  //   _id: 6,
  // },
];
