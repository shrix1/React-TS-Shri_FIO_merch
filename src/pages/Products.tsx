import { FC, useState } from "react";
import { products } from "./Mainproducts";

const Products: FC = () => {
  const [change, setChange] = useState<number>(0);

  return (
    <div>
      {products.map((i, k) => {
        return (
          <main className="flex justify-center items-center" key={k}>
            <div
              className="flex mt-10 justify-center items-center flex-col border
             border-black p-2 w-[270px] rounded-md bg-sky-300"
            >
              <div
                className="bg-[#E7DBDB] w-[250px] h-[200px] flex justify-center 
            items-center rounded-md"
              >
                <img src={i.img[change]} alt={i.name} className="w-[230px]" />
              </div>

              <div className="flex justify-between w-[240px] mt-2">
                <h1 className="text-2xl font-bold">{i.name}</h1>
                <h1 className="text-2xl font-bold underline">${i.price}</h1>
              </div>

              <div className="flex gap-7">
                <button onClick={() => setChange(0)}>black</button>
                <button onClick={() => setChange(1)}>shriBlue</button>
                <button onClick={() => setChange(2)}>Blue</button>
              </div>

              <button>Add to cart</button>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default Products;
