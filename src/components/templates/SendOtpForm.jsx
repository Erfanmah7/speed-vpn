import React, { useState } from "react";
import { sendOtp } from "../../services/auth";
import { Link } from "react-router-dom";

function SendOtpForm({ setMobile, mobile, setStep }) {
  const [mobile1, setMobile1] = useState("");
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (!mobile) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler} className="md:hidden">
      <p className="text-[#142a4a] font-YekanBakhBold mb-3">
        مصرف هوشمند انرژی
      </p>
      <label htmlFor="input" className="font-YekanBakhRegular text-sm">
        شماره تلفن همراه خود را وارد کنید
      </label>
      <div className="relative">
        <input
          type="text"
          id="input"
          placeholder="شماره موبایل"
          value={mobile}
          className={`p-3 appearance-none mt-6 text-xs font-YekanBakhRegular w-full h-10 border-black/15 border bg-transparent rounded-[36px] focus:border-none focus:outline focus:outline-[#ffbf44] ${
            error ? "border-red-500" : ""
          }`}
          onChange={(e) => setMobile(e.target.value)}
          onBlur={handleBlur}
        />
        <div
          className={`transition-all duration-300 ease-in-out transform ${
            error ? "opacity-100 translate-y-1" : "opacity-0 translate-y-0"
          }`}
        >
          <p className="text-red-500 mt-2 font-YekanBakhRegular text-right mr-5 text-[11px]">
            ورود شماره تلفن همراه اجباری است.
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="p-3 appearance-none mt-4 text-sm text-white font-YekanBakhSemiBold w-full h-10 bg-[#ffad14] hover:bg-[#ffbf44] rounded-[32px] focus:outline-1 focus:outline-[#ffbf44]"
      >
        ادامه
      </button>
      <p className="font-YekanBakhRegular text-xs mt-5">
        ثبت ‌نام شما به معنی پذیرش
        <Link to="/" className="text-[#e69500]">
          <span> قوانین و مقررات </span>
        </Link>
        است
      </p>
    </form>
  );
}

export default SendOtpForm;
