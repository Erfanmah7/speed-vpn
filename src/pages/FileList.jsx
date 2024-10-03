import React from "react";

function FileList() {
  return (
    <div className="h-[964px] w-[1322px] dark:bg-[#081A30] bg-white rounded-[15px] px-[52px] py-[57px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[36px]">لیست فایل ها</h1>
        <div>
          {/* search */}
          <div className=" relative flex items-center">
            <input
              type="text"
              placeholder="جستجو"
              className="rounded-[30px] w-[406px] h-[61px] pl-14 pr-8  outline-none mr-7 dark:bg-[#020F20] bg-[#f1f5f9] dark:placeholder-white"
            />
            <a
              href="#"
              className="absolute flex items-center justify-center left-2.5 w-[38px] h-[38px]"
            >
              <svg className="dark:text-white text-[#020f20] h-6 w-6">
                <use href="#search"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileList;
