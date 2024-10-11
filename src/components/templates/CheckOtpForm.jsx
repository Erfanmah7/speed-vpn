import React from "react";
import { checkOtp } from "../../services/auth";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";

function CheckOtpForm({ setStep, mobile, code, setCode }) {
  const { refetch } = useQuery({ queryKey: ["profile"], queryFn: getProfile });

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    console.log({ response, error });
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p className="text-[#142a4a] font-YekanBakhBold mb-3">
        ورود با رمز یکبار مصرف
      </p>
      <span className="font-YekanBakhRegular">
        رمز یکبار مصرف ارسالی به شماره «{mobile}» را وارد کنید
      </span>

      <input
        type="text"
        placeholder="کد تأیید"
        value={code}
        className="p-2 appearance-none text-center text-xl font-YekanBakhRegular w-16 h-16 border-black/15 border bg-transparent rounded-[28px] focus:border-none focus:outline focus:outline-[#ffbf44]"
        onChange={(e) => setCode(e.target.value)}
        id="input"
      />
      <button
        type="submit"
        className="p-3 appearance-none mt-4 text-sm text-white font-YekanBakhSemiBold w-full h-10 bg-[#ffad14] hover:bg-[#ffbf44] rounded-[32px] focus:outline-1 focus:outline-[#ffbf44]"
      >
        ورود
      </button>
      <button
        className="p-3 appearance-none mt-4 text-sm text-white font-YekanBakhSemiBold w-full h-10 bg-[#ff9114] hover:bg-[#ffbf44] rounded-[32px] focus:outline-1 focus:outline-[#ffbf44]"
        onClick={() => setStep(1)}
      >
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
