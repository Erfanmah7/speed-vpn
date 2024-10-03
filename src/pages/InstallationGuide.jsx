import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import ComboBox from "../components/ComboBox";
// h-[964px]
function InstallationGuide() {
  return (
    <div className=" w-[1322px] dark:bg-[#081A30] bg-white rounded-[15px] pt-[36px] pb-[635px] px-[61px]">
      <div className="flex flex-col items-start gap-y-[5px]">
        <h1 className="text-[34px]">برنامه نصبی مربوط به هر سیستم عامل</h1>
        <p className="text-[20px]">
          با استفاده از منو های زیر نسبت به سیستم عامل خود می توانید از اشتراک
          خود استفاده کنید.
        </p>
        <p className="text-[18px]">نکته: اتصال در مک مشابه ios است</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-[91px]">
        <div>
          <Accordion
            className="w-[492px] flex justify-center items-center flex-col"
            allowMultiple
          >
            <AccordionItem className="p-[30px] w-[492px] bg-[#F3A702] rounded-[30px]">
              <h2>
                <AccordionButton className="flex justify-between">
                  <span className="text-right font-bold text-navy-900" flex="1">
                    اندروید
                  </span>

                  <div className="flex items-center gap-x-3">
                    <AccordionIcon className="text-right !text-navy-900" />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-right mt-9 !text-navy-900 font-YekanBakhLight"
                pb={7}
              >
                <p className="mb-[10px] text-[18px]">
                  برنامه مورد نظر خود را انتخاب کنید.
                </p>
                <ComboBox />
                <div className="mt-[15px]">
                  <ComboBox />
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="p-[30px] w-[492px] bg-[#1BD3EC] rounded-[30px] mt-[22px]">
              <h2>
                <AccordionButton className="flex justify-between">
                  <span className="text-right font-bold text-navy-900" flex="1">
                    ios
                  </span>

                  <div className="flex items-center gap-x-3">
                    <AccordionIcon className="text-right !text-navy-900" />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-right mt-9 !text-navy-900 font-YekanBakhLight"
                pb={7}
              >
                <p className="mb-[10px] text-[18px]">
                  برنامه مورد نظر خود را انتخاب کنید.
                </p>
                <ComboBox />
                <div className="mt-[15px]">
                  <ComboBox />
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="p-[30px] w-[492px] bg-[#23E87B] rounded-[30px] mt-[22px]">
              <h2>
                <AccordionButton className="flex justify-between">
                  <span className="text-right font-bold text-navy-900" flex="1">
                    ویندوز
                  </span>

                  <div className="flex items-center gap-x-3">
                    <AccordionIcon className="text-right !text-navy-900" />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-right mt-9 !text-navy-900 font-YekanBakhLight"
                pb={7}
              >
                <p className="mb-[10px] text-[18px]">
                  برنامه مورد نظر خود را انتخاب کنید.
                </p>
                <ComboBox />
                <div className="mt-[15px]">
                  <ComboBox />
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default InstallationGuide;
