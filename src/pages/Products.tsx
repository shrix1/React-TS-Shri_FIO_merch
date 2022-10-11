import { FC, useState } from "react";
import { ShirtList } from "./Mainproducts";
import { BsFillCircleFill } from "react-icons/bs";

const Products: FC = () => {
  const [shirt, setShirt] = useState<number>(0);
  // const [pants, setPants] = useState<number>(0);
  // const [socks, setSocks] = useState<number>(0);

  return (
    <div>
      {ShirtList.map((i, k) => {
        return (
          <main className="flex justify-center items-center" key={k}>
            <div
              className="flex mt-10 justify-center items-center flex-col border
             border-black p-2 w-[270px] rounded-md bg-sky-300"
            >
              <div
                className="bg-[#E7DBDB] w-[250px] h-[220px] flex justify-center 
            items-center rounded-md"
              >
                <img src={i.img[shirt]} alt={i.name} className="w-[230px]" />
              </div>

              <div className="flex justify-between w-[240px] mt-2">
                <h1 className="text-2xl font-bold">{i.name}</h1>
                <h1 className="text-2xl font-bold underline">${i.price}</h1>
              </div>

              <div className="flex justify-around w-[300px] mt-3">
                <div className="flex justify-between w-[80px]">
                  <button onClick={() => setShirt(0)}>
                    <BsFillCircleFill className="text-2xl text-[#393939]" />
                  </button>

                  <button onClick={() => setShirt(1)}>
                    <BsFillCircleFill className="text-2xl text-[#3c8bad]" />
                  </button>

                  <button onClick={() => setShirt(2)}>
                    <BsFillCircleFill className="text-2xl text-[#365f9d]" />
                  </button>
                </div>

                <button
                  className="w-[100px] border-2 border-black rounded-md h-[35px]
                font-bold bg-black text-sky-300 hover:bg-white hover:text-black
                transition-all duration-150 hover:w-[102px] text-[14px]"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default Products;
