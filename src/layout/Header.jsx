import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-[1322px] h-[89px] bg-[#081A30] rounded-[15px] flex justify-between items-center px-[23px] py-[26px] mb-[21px]">
      <Link to="/">logo</Link>
      <div className="flex gap-x-[67.50px]">
        <div>
          <ul className="flex gap-x-[23px]">
            <Link to="/installationguide">
              <li>راهنما نصب</li>
            </Link>
            <a href="#">
              <li>اپ نصبی</li>
            </a>
            <a href="#">
              <li>لیست فایل ها</li>
            </a>
          </ul>
        </div>
        <div>profile</div>
      </div>
    </div>
  );
}

export default Header;
