import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [mod, setMod] = useState(localStorage.getItem("theme") === "light");

  useEffect(() => {
    toggleDarkMod();
  }, [mod]);
  const toggleDarkMod = () => {
    if (!mod) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="w-[1322px] h-[89px] dark:bg-[#081A30] bg-white rounded-[15px] flex justify-between items-center px-[23px] py-[26px] mb-[21px]">
      <Link to="/">logo</Link>
      <div className="flex gap-x-[67.50px] items-center">
        <div>
          <ul className="flex gap-x-[23px]">
            <Link
              className="dark:hover:text-[#1BD3EC] hover:text-[#F3A702] transition-all"
              to="/installationguide"
            >
              <li>راهنما نصب</li>
            </Link>
            <a
              href="#"
              className="dark:hover:text-[#1BD3EC] hover:text-[#F3A702] transition-all"
            >
              <li>اپ نصبی</li>
            </a>
            <Link
              to="/filelist"
              className="dark:hover:text-[#1BD3EC] hover:text-[#F3A702] transition-all"
            >
              <li>لیست فایل ها</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-[50px]">
          <div className="cursor-pointer flex gap-x-[9.5px]">
            <div className="flex flex-col text-sm justify-center items-end">
              <p>mohammad</p>
              <p className="text-xs">نام کاربری</p>
            </div>
            <svg className="h-[43px] w-[43px] text-[#1F2937] dark:text-white inline-block">
              <use href="#profile"></use>
            </svg>
          </div>
          {/* dark mode */}
          <div className="cursor-pointer" onClick={() => setMod(!mod)}>
            <svg className="h-[43px] w-[43px]  text-[#1F2937] dark:text-white inline-block dark:hidden">
              <use href="#moon-icon"></use>
            </svg>

            <svg className="h-[43px] w-[43px] text-[#1F2937] dark:text-white  hidden dark:inline-block">
              <use href="#sun-icon"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
