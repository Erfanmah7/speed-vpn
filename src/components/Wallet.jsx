import React from "react";

function Wallet() {
  return (
    <div className="w-[379.26px] h-[244px] rounded-[25px] bg-[#1BD3EC] flex flex-col px-[24px] pt-[12px] pb-[26px] mb-[46px]">
      <div className="flex justify-between">
        <h3 className="font-MorabbaBold text-[28px]">کیف پول</h3>
        <p>$</p>
      </div>
      <p className="text-[24px] text-right mt-[65px] mb-[15px]">اعتبار</p>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[330px] h-[43.32px] rounded-[8px] dark:bg-[#020F20] bg-[#f1f5f9] flex justify-between items-center px-[19px]">
          <p>تومان</p>
          <p>300.000</p>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
