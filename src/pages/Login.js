import React from "react";
import { Link } from "react-router-dom";
import SvgIcon from "../components/SvgIcon";

const Login = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 px-4 sm:px-0">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="flex flex-col justify-center">
          <Link to={"/"}>
            <div className="w-5 h-5 relative flex-col justify-start items-start inline-flex ">
              <div className="w-5 h-5 relative">
                <SvgIcon src="/arrow-left.svg" alt="Search Icon" />
              </div>
            </div>
          </Link>
          <div className="text-gray-900 text-2xl font-bold font-['SF Pro Display'] leading-loose tracking-wide">
            Welcome Back
          </div>
          <div className="w-[343px] text-zinc-500 text-sm font-normal font-['SF Pro Display'] leading-tight tracking-tight">
            Log In to your Placoo account to explore your dream place to live
            across the whole world!
          </div>
        </div>
        <div className="bg-white py-12">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="text-gray-900 text-base font-normal font-['SF Pro Display'] leading-normal tracking-tight"
              >
                Username
              </label>
              <div className="mt-2 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full h-12 pl-[46px] pr-[90px] py-3 bg-zinc-100 border border-zinc-200 rounded-[81px] focus:outline-indigo-400 focus:bg-indigo-50 focus:border-indigo-400 justify-start items-center inline-flex    "
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none focus:bg-indigo-400 ">
                  <SvgIcon
                    src="/frame.svg"
                    alt="Custom Icon"
                    className="text-zinc-500 transition-colors duration-300 ease-in-out focus:text-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-gray-900 text-base font-normal font-['SF Pro Display'] leading-normal tracking-tight"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full h-12 pl-[46px] pr-[90px] py-3 bg-zinc-100  rounded-[81px] border border-zinc-200  focus:outline-indigo-400 focus:bg-indigo-50 focus:border-indigo-400 justify-start items-center inline-flex"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 ">
                  <SvgIcon src="/key.svg" alt="key" />
                </div>
              </div>
            </div>
            <Link to={"/explore"}>
              <div className="flex justify-center items-center mt-[28px] flex-col md:flex-row gap-0 md:gap-2">
                <div className="w-full h-12 py-[13px] bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-[30px] justify-center items-center inline-flex mb-4 md:mb-0">
                  <div className="text-center text-white text-base font-medium font-['SF Pro Display'] leading-normal">
                    Log in
                  </div>
                </div>
              </div>
            </Link>
            <div className="text-center text-zinc-500 text-sm font-normal font-['SF Pro Display']">
              Forgot password?
            </div>
          </form>

          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <div className="w-[47px] h-[26px] px-3.5 py-1 bg-violet-50 rounded-3xl justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-violet-400 text-xs font-semibold font-['SF Pro Display'] uppercase leading-[18px] tracking-wide">
                    or
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 ">
              <div className="w-full h-12 pl-4 pr-[102px] py-[13px] bg-gray-800 rounded-[103px] justify-start items-center gap-[60px] sm:gap-[128px] inline-flex">
                <SvgIcon src="/apple.svg" alt="apple Icon" />
                <div className="text-center text-white text-base font-medium font-['SF Pro Display'] leading-normal ml-1">
                  Sign in with Apple
                </div>
              </div>
              <div className="w-full h-12 pl-4 pr-[97px] py-[13px] bg-white rounded-[103px] border border-slate-200 justify-start items-start gap-[60px] sm:gap-[128px] inline-flex">
                <SvgIcon src="/google-icon.svg" alt="Custom Icon" />
                <div className="text-center text-slate-600 text-base font-medium font-['SF Pro Display'] leading-normal">
                  Sign in with Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
