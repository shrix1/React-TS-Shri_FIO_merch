import { RiShoppingCart2Fill } from "react-icons/ri";
import { FC } from "react";
import { Link } from "react-router-dom";

const Nav: FC = () => {
  return (
    <nav
      className="flex flex-col bg-sky-300 h-[76px] lg:flex-row lg:justify-around 
    lg:items-center mb-4"
    >
      <main className="flex justify-around lg:justify-between p-5 font-semibold">
        <header className="text-2xl font-pop font-bold">
          <Link to={"/"}>
            <h1 title="home">Shri FIO</h1>
          </Link>
        </header>

        <Link to={"/checkout"}>
          <div className="flex text-xl mt-2 lg:ml-10" title="checkout cart">
            <RiShoppingCart2Fill />
            {/* <span className="ml-3 -mt-1">{items.length}</span> */}
          </div>
        </Link>
      </main>

      <section className="text-center lg:text-justify">
        <input
          type="text"
          placeholder="search "
          className="p-[2px] font-pop border-2 w-[200px] -mt-10
            rounded-md border-sky-300 outline-none hover:border-gray-500
            pl-[6px] border-b-sky-600 border-b-3 "
          // onChange={(e) => setValue(e.target.value)}
          // value={value}
          title="search items"
        />
      </section>
    </nav>
  );
};

export default Nav;
