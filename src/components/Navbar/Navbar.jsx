import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import Darkmode from "./Darkmode";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#",
  },
  {
    id: 3,
    name: "Pages",
    link: "/#",
  },
  {
    id: 3,
    name: "Blog",
    link: "/#",
  },
  {
    id: 3,
    name: "Contacts",
    link: "/Contacts",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white timer relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* logo */}
          <div>
            <a
              href=""
              className="font-bold uppercase text-2xl sm:text-3xl flex gap-2"
            >
              <img src={logo} alt="logo" className="w-[200px]" />
            </a>
          </div>
          {/* search barr and other button */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative">
              <input
                type="text"
                placeholder="Search"
                className="sm:w-[200px] group-hover:w-[300px] timer rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 dark:bg-gray-800 dark:border-gray-500 "
              />
              <CiSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-2" />
            </div>
            {/* other button */}
            <button className="group bg-gradient-to-r from-primary to-secondary timer text-white px-4 py-1 rounded-full flex justify-center items-center capitalize gap-3">
              <span className="hidden group-hover:block timer">order</span>
              <FaShoppingCart className="text-xl text-white cursor-pointer" />
            </button>

            {/* dark mode */}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className="flex justify-center py-4">
        <ul className="sm:flex items-center gap-3">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="hover:text-primary font-medium timer inline-block px-4"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="group relative">
            <a
              href="#"
              className="flex items-center hover:text-primary font-medium "
            >
              Trending
              <span>
                <FaCaretDown className="timer group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-999 hidden group-hover:block w-[200px] p-2 bg-white">
              <ul className="">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="hover:bg-primary/20  inline-block w-full timer p-1 rounded-md dark:text-black"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
