import React from "react";
import Banner from "../components/Banner";
import Wallet from "../components/Wallet";

function Home() {
  return (
    <div>
      <Banner />
      <div className="w-[1322px] h-[75px] dark:bg-[#1BD3EC] bg-[#F3A702] text-white rounded-[15px] text-center flex justify-center items-center text-[24px] px-[23px] py-[26px] mb-[21px] -tracking-[2%]">
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
      </div>

      <div className="w-[1322px] h-[705px] flex gap-x-[26px]">
        <div className="w-[792px] h-[705px] flex flex-col gap-y-[21px]">
          <div className="w-[792px] h-[355px] rounded-[15px] dark:bg-[#081A30] bg-white py-[40px] px-[43px] flex gap-x-[30px]">
            <div className="w-[214px] h-[276px] rounded-[25px] bg-[#23E87B]">
              top
            </div>
            <div className="w-[214px] h-[276px] rounded-[25px] bg-[#1BD3EC]">
              top
            </div>
            <div className="w-[214px] h-[276px] rounded-[25px] bg-[#F3A702]">
              top
            </div>
          </div>
          <div className="flex gap-x-[24px]">
            <div className="w-[384px] h-[329px] rounded-[15px] dark:bg-[#081A30] bg-white px-[19px] py-[14px]">
              right
            </div>
            <div className="w-[384px] h-[329px] rounded-[15px] dark:bg-[#081A30] bg-white px-[19px] py-[14px]">
              left
            </div>
          </div>
        </div>
        <div className="w-[504px] h-[705px] rounded-[15px] dark:bg-[#081A30] flex flex-col bg-white py-[56px] px-[62px] divide-y-[1px] divide-gray-300 dark:divide-white">
          <div>
            <Wallet />
          </div>
          <div>
            <div className="flex justify-between pt-10">
              <h1 className="text-[32px]">شارژ کیف پول</h1>
              <p>آیکون</p>
            </div>
            <div className="flex flex-col justify-center items-start mt-[10px] mb-[13px] gap-y-[3px] text-white/35">
              <p>مبلغ دلخواه خود را وارد کنید</p>
              <p>به تومان وارد کنید</p>
            </div>
            <div>
              <input
                type="text"
                className="w-[379px] h-[56px] rounded-[10px] dark:bg-[#020F20] p-[15px] outline-none mb-[24px]"
              />
              <button className="w-[379px] h-[56px]  rounded-[10px] hover:bg-[#23E87B] bg-[#1BD3EC] transition-all">
                ثبت سفارش
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
