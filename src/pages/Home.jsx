import React from "react";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <Banner />
      <div className="w-[1322px] h-[75px] bg-[#1BD3EC] rounded-[15px] text-center flex justify-center items-center text-[24px] px-[23px] py-[26px] mb-[21px] -tracking-[2%]">
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
      </div>

      <div className="w-[1322px] h-[705px] flex gap-x-[26px]">
        <div className="w-[792px] h-[705px] flex flex-col gap-y-[21px]">
          <div className="w-[792px] h-[355px] rounded-[15px] bg-[#081A30]">
            top
          </div>
          <div className="flex gap-x-[24px]">
            <div className="w-[384px] h-[329px] rounded-[15px] bg-[#081A30]">right</div>
            <div className="w-[384px] h-[329px] rounded-[15px] bg-[#081A30]">left</div>
          </div>
        </div>

        <div className="w-[504px] h-[705px] rounded-[15px] bg-[#081A30]">
          کیف پول
        </div>
      </div>
    </div>
  );
}

export default Home;
