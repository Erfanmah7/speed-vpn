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
    <div className="w-[1322px] h-[89px] bg-[#081A30] dark:bg-white rounded-[15px] flex justify-between items-center px-[23px] py-[26px] mb-[21px]">
      <Link to="/">logo</Link>
      <div className="flex gap-x-[67.50px] items-center">
        <div>
          <ul className="flex gap-x-[23px]">
            <Link to="/installationguide">
              <li>راهنما نصب</li>
            </Link>
            <a href="#">
              <li>اپ نصبی</li>
            </a>
            <Link to="/filelist">
              <li>لیست فایل ها</li>
            </Link>
          </ul>
        </div>
        <div>
          {/* dark mode */}
          <div className="cursor-pointer" onClick={() => setMod(!mod)}>
            <svg className="h-[43px] w-[43px]  dark:text-[#1F2937] text-white inline-block dark:hidden">
              <use href="#sun-icon"></use>
            </svg>

            <svg className="h-[43px] w-[43px] dark:text-[#1F2937] text-white  hidden dark:inline-block">
              <use href="#moon-icon"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
