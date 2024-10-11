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
            <div className="w-[214px] h-[276px] rounded-[25px] bg-[#23E87B] px-[36px] py-[16px] flex flex-col justify-between">
              <p>عکس</p>
              <p>متن</p>
              <div className="flex justify-center items-center">
                <p className="text-[13px] w-[141px] text-center mt-[10px]">
                  برای تست رایـگان روی برنامه مــورد نظر کلیک کنید
                </p>
              </div>
              <div className="flex justify-between items-center mt-[10px] text-black">
                <p>رایگان</p>
                <p>1 ساعته</p>
              </div>
              <button className="bg-[#087E3D] w-[143px] h-[27px] rounded-[5px]  mt-[7px]">
                3
              </button>
              <button className="bg-[#10A753] w-[143px] h-[27px] rounded-[5px] mt-[4px]">
                2
              </button>
            </div>
            <div className="w-[214px] h-[276px] rounded-[25px] bg-[#1BD3EC] px-[36px] py-[16px] flex flex-col justify-between">
              <p>عکس</p>
              <p>متن</p>
              <div className="flex justify-center items-center">
                <p className="text-[13px] w-[141px] text-center mt-[10px]">
                  برای تست رایـگان روی برنامه مــورد نظر کلیک کنید
                </p>
              </div>
              <div className="flex justify-between items-center mt-[10px] text-black">
                <p>رایگان</p>
                <p>1 ساعته</p>
              </div>
              <button className="bg-[#188796] w-[143px] h-[27px] rounded-[5px]  mt-[7px]">
                3
              </button>
              <button className="bg-[#020F20] w-[143px] h-[27px] rounded-[5px] mt-[4px]">
                ثبت سفارش
              </button>
            </div>
            <div className="w-[214px] h-[276px] rounded-[25px] bg-[#F3A702] px-[36px] py-[16px] flex flex-col justify-between">
              <p>عکس</p>
              <p>متن</p>
              <div className="flex justify-center items-center">
                <p className="text-[13px] w-[141px] text-center mt-[10px]">
                  برای تست رایـگان روی برنامه مــورد نظر کلیک کنید
                </p>
              </div>
              <div className="flex justify-between items-center mt-[10px] text-black">
                <p>رایگان</p>
                <p>1 ساعته</p>
              </div>
              <button className="bg-[#BF870F] w-[143px] h-[27px] rounded-[5px]  mt-[7px]">
                3
              </button>
              <button className="bg-[#23E87B] w-[143px] h-[27px] rounded-[5px] mt-[4px]">
                ثبت سفارش
              </button>
            </div>
          </div>
          <div className="flex gap-x-[24px]">
            <div className="w-[384px] h-[329px] rounded-[15px] dark:bg-[#081A30] bg-white px-[19px] py-[14px]">
              {/* right */}

              <div className="flex justify-between">
                <p>یک روز مانده تا اتمام اشتراک</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[27px] bg-[#1BD3EC] rounded-[5px] mt-[14px] mb-[11px] flex justify-around items-center">
                <p>تمدید فایل</p>
                <p>یوزر</p>
                <p>محصول</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <button className="w-[78px] h-[21px] dark:bg-[#1BD3EC] hover:bg-[#23E87B] bg-[#F3A702] rounded-[4px] text-xs">
                  تمدید
                </button>
                <p>12.5868</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <button className="w-[78px] h-[21px] dark:bg-[#1BD3EC] hover:bg-[#23E87B] bg-[#F3A702] rounded-[4px] text-xs">
                  تمدید
                </button>
                <p>12.5868</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <button className="w-[78px] h-[21px] dark:bg-[#1BD3EC] hover:bg-[#23E87B] bg-[#F3A702] rounded-[4px] text-xs">
                  تمدید
                </button>
                <p>12.5868</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <button className="w-[78px] h-[21px] dark:bg-[#1BD3EC] hover:bg-[#23E87B] bg-[#F3A702] rounded-[4px] text-xs">
                  تمدید
                </button>
                <p>12.5868</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <button className="w-[78px] h-[21px] dark:bg-[#1BD3EC] hover:bg-[#23E87B] bg-[#F3A702] rounded-[4px] text-xs">
                  تمدید
                </button>
                <p>12.5868</p>
                <p>icon</p>
              </div>
            </div>
            <div className="w-[384px] h-[329px] rounded-[15px] dark:bg-[#081A30] bg-white px-[19px] py-[14px]">
              {/* left */}
              <div className="flex justify-between">
                <p>اعلام روز باقی مانده 5 فایل اخیر</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[27px] bg-[#1BD3EC] rounded-[5px] mt-[14px] mb-[11px] flex justify-around items-center">
                <p>مانده</p>
                <p>یوزر</p>
                <p>محصول</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <p>30 روز</p>
                <p>12.5868</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <p>20 روز</p>
                <p>12.5868</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <p>18 روز</p>
                <p>12.5868</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <p>14 روز</p>
                <p>12.5868</p>
                <p>icon</p>
              </div>
              <div className="w-full h-[39px] bg-[#020F20] rounded-[5px] mb-[5px] flex justify-around items-center">
                <p>10 روز</p>
                <p>12.5868</p>
                <p>icon</p>
              </div>
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
            <div className="flex flex-col justify-center items-start mt-[10px] mb-[13px] gap-y-[3px] dark:text-white/35 text-black/35">
              <p>مبلغ دلخواه خود را وارد کنید</p>
              <p>به تومان وارد کنید</p>
            </div>
            <div>
              <input
              dir="ltr"
              placeholder="300.000"
                type="text"
                className="w-[379px] h-[56px] rounded-[10px] dark:bg-[#020F20] bg-[#f1f5f9] p-[15px] outline-none mb-[24px]"
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
