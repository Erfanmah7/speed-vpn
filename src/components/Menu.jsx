import React, { useState } from "react";

const Menu = () => {
  const Menus = [
    { name: "Home", icon: "account", dis: "-translate-x-[7px]" },
    { name: "Profile", icon: "account", dis: "-translate-x-[87px]" },
    { name: "Message", icon: "account", dis: "-translate-x-[167px]" },
    { name: "Photos", icon: "account", dis: "-translate-x-[247px]" },
    { name: "Settings", icon: "account", dis: "-translate-x-[327px]" },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-gray-600 h-[8rem] px-16">
      <ul className="flex relative h-[8rem]">
        <span className={`relative duration-500 ${Menus[active].dis}`}>
          <span className="bg-[#020f20] duration-500 border-4 border-[#020f20] h-16 w-16 absolute bottom-[35px] rounded-full z-50"></span>

          <span
            className="w-16 h-16 bg-gray-600 absolute -bottom-[0px] -left-[128px] 
            rounded-br-[70px] z-20 shadow-myShadow1"
          ></span>

          <span className="w-[130px] h-16 bg-[#020f20] absolute -bottom-[0px] -left-[97px] z-10"></span>

          <span
            className="w-16 h-16 bg-gray-600 absolute -bottom-[0px] -right-[64px] 
            rounded-bl-[70px] z-20 shadow-myShadow2"
          ></span>
        </span>

        {Menus.map((menu, i) => (
          <li key={i} className="w-16 mx-2 cursor-pointer">
            {" "}
            {/* فاصله با mx-2 */}
            <a
              className="flex flex-col text-center items-center justify-center pt-16 text-sm"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-sm -mt-5 cursor-pointer duration-500 z-50 ${
                  i === active && "-mt-2 text-white z-50"
                }`}
              >
                <svg className="w-[35px] h-[35px] text-white">
                  <use href={`#${menu.icon}`}></use>
                </svg>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-7 duration-700 opacity-100"
                    : "opacity-0 translate-y-4"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
