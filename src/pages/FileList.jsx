import React from "react";

function FileList() {
  return (
    <div className="h-[964px] w-[1322px] dark:bg-[#081A30] bg-white rounded-[15px] px-[52px] py-[57px]">
      <div className="flex justify-between items-center mb-[40px]">
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

      <div>
        <table>
          <thead>
            <tr className="w-[1218px] h-[52px] dark:bg-[#1BD3EC] bg-[#F3A702] rounded-[15px] mb-[16px] pl-[220px] pr-[82px] py-[6px] flex justify-between items-center">
              <th className="ml-[161px]">شماره یوزر</th>
              <th className="ml-[180px]">مانده</th>
              <th className="ml-[249px]">گزارش سفارش</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-[1218px] h-[60px] dark:bg-[#020F20] bg-[#f1f5f9] rounded-[15px] mb-[7px] pl-[220px] pr-[82px] py-[6px] flex justify-between items-center">
              <td className="ml-[187px] shrink">12.5588</td>
              <td className="ml-[215px] shrink-0">30 روز</td>
              <td className="ml-[200px] shrink-0">25537 #</td>
              <td className="flex gap-x-[5px] items-center shrink-0">
                <button className="w-[109px] h-[37px] dark:bg-[#F3A702] hover:bg-[#23E87B] bg-[#1BD3EC] rounded-[7px]">
                  دانلود فایل
                </button>
                <button className="w-[109px] h-[37px] dark:bg-[#1BD3EC] hover:bg-[#23E87B] bg-[#F3A702] rounded-[7px]">
                  تمدید
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileList;
