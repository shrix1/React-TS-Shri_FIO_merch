import t1 from "./images/one-s.png";
import t2 from "./images/two-s.png";
import t3 from "./images/three-s.png";
import p1 from "./images/one-p.png";
import p2 from "./images/two-p.png";
import p3 from "./images/three-p.png";
import s1 from "./images/sock1.png";
import s2 from "./images/sock2.png";
import s3 from "./images/sock3.png";

export interface Products {
  name: string;
  price: number;
  img: string[];
  _id: number;
}

export const ShirtList: Products[] = [
  {
    name: "Tshirt",
    price: 100,
    img: [t1, t2, t3],
    _id: 1,
  },
  //need to add more
];

export const SocksList: Products[] = [
  {
    name: "Socks",
    price: 100,
    img: [s1, s2, s3],
    _id: 1,
  },
  //need to add more
];

export const PantsList: Products[] = [
  {
    name: "Pant",
    price: 100,
    img: [p1, p2, p3],
    _id: 1,
  },
  //need to add more
];
