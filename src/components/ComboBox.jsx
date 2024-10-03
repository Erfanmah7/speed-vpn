import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function ComboBox() {
  return (
    <div>
      <Accordion
        className="w-[430px] flex justify-center items-center flex-col"
        allowMultiple
      >
        <AccordionItem className="p-[18px] w-[430px] dark:bg-[#020F20] bg-[#f1f5f9] rounded-[30px]">
          <h2>
            <AccordionButton className="flex justify-between">
              <span className="text-right font-bold text-navy-900" flex="1">
                دانلود
              </span>

              <div className="flex items-center gap-x-3">
                <AccordionIcon className="text-right !text-navy-900" />
              </div>
            </AccordionButton>
          </h2>
          <AccordionPanel className="text-center mt-7 !text-navy-900" pb={1}>
            <div>
              <button className="w-[371px] h-[60px] rounded-[30px] bg-[#F3A702]">
                دانلود
              </button>
              <p className="mt-[10px] text-right text-[13px]">
                برای دانلود کلیک کنید
              </p>

              <p className="mt-[18px] text-right text-[20px]">راهنما نصب</p>
              <div className="flex flex-col items-center justify-center mt-[10px]">
                <div className="w-[371px] h-[239px] dark:bg-[#081A30] bg-white rounded-[5px] flex justify-center items-center">
                  ویدیو نصب
                </div>
                <p className="w-[371px] h-[205px] text-justify mt-[18px]">
                  پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان داشت که
                  تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت پایان رسد و
                  زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگــوی
                  سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قـرار
                  گیرد.
                </p>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ComboBox;
