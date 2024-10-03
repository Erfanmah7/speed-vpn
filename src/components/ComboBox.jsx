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
        <AccordionItem className="p-[18px] w-[430px] bg-[#020F20] rounded-[30px]">
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
          <AccordionPanel
            className="text-right mt-2 !text-navy-900 font-YekanBakhLight"
            pb={320}
          >
            {/* /// */}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ComboBox;
