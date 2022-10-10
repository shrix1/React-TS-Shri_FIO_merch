import t1 from "./images/one-s.png";
import t2 from "./images/two-s.png";
import t3 from "./images/three-s.png";
// import p1 from "./images/one-p.png";
// import p2 from "./images/two-p.png";
// import p3 from "./images/three-p.png";

export interface ProductsProps {
  name: string;
  price: number;
  img: string[];
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
  //   name: "Pant",
  //   price: 100,
  //   img: [p1, p2, p3],
  //   _id: 4,
  // },
];
