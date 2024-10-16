import React, { useState } from "react";

const Menu = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "-translate-x-0" },
    { name: "Profile", icon: "person-outline", dis: "-translate-x-16" },
    { name: "Message", icon: "chatbubble-outline", dis: "-translate-x-32" },
    { name: "Photos", icon: "camera-outline", dis: "-translate-x-48" },
    { name: "Settings", icon: "settings-outline", dis: "-translate-x-64" },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-gray-600 h-[8rem] px-16">
      <ul className="flex relative h-[8rem]">
      <span className={`relative duration-500 ${Menus[active].dis}`}>
  <span
    className="bg-[#020f20] duration-500 border-4 border-[#020f20] h-16 w-16 absolute bottom-[35px] rounded-full z-50"
  ></span>

  <span
    className="w-16 h-16 bg-gray-600 absolute -bottom-[0px] -left-[128px] 
    rounded-br-[70px] z-20 shadow-myShadow1"
  ></span>

  <span
    className="w-[130px] h-16 bg-[#020f20] absolute -bottom-[0px] -left-[97px] z-10"
  ></span>

  <span
    className="w-16 h-16 bg-gray-600 absolute -bottom-[0px] -right-[64px] 
    rounded-bl-[70px] z-20 shadow-myShadow2"
  ></span>
</span>

        {Menus.map((menu, i) => (
          <li key={i} className="w-16 cursor-pointer">
            <a
              className="flex flex-col text-center pt-6 text-sm"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "mt-16 text-white"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-5 duration-700 opacity-100"
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
