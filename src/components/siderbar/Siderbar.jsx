import { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { BsGrid1X2 } from "react-icons/bs";
import { BiPurchaseTag } from "react-icons/bi";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Home" },
    { title: "Modulo de Usuarios", icon: <HiOutlineUsers /> },
    { title: "Modulo de Productos", icon: <BsGrid1X2 /> },
    {
      title: "Modulo de Ventas",
      icon: <BiPurchaseTag />,
      submenu: true,
      submenuItems: [
        { title: "SubMenu 1" },
        { title: "SubMenu 2" },
        { title: "SubMenu 3" },
      ],
    },
  ];

  return (
    <div className="flex">
      <div
        className={` bg-white h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-500 relative`}
      >
        <BsArrowLeftShort
          className={`text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`text-dark-purple text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Erp Admin
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-gray-100 mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-dark-purple text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />

          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-black focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md mt-2`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <IoHomeOutline />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-200 rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold text-black">Home</h1>
      </div>
    </div>
  );
};

export default Sidebar;
