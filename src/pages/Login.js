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
            <div className="mt-2 relative input-container">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full h-12 pl-[46px] pr-[90px] py-3 bg-zinc-100 border border-zinc-200 rounded-[81px] focus:outline-indigo-400 focus:bg-indigo-50 focus:border-indigo-400 justify-start items-center inline-flex    "
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <div className="icon-container">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0002 1.83334C8.5985 1.83334 6.646 3.78584 6.646 6.18751C6.646 8.54334 8.4885 10.45 10.8902 10.5325C10.9635 10.5233 11.0368 10.5233 11.0918 10.5325C11.1102 10.5325 11.1193 10.5325 11.1377 10.5325C11.1468 10.5325 11.1468 10.5325 11.156 10.5325C13.5027 10.45 15.3452 8.54334 15.3543 6.18751C15.3543 3.78584 13.4018 1.83334 11.0002 1.83334Z"
                      fill="url(#paint0_linear_403_1640)"
                    />
                    <path
                      d="M15.6569 12.9708C13.0994 11.2658 8.92854 11.2658 6.35271 12.9708C5.18854 13.75 4.54688 14.8042 4.54688 15.9317C4.54688 17.0592 5.18854 18.1042 6.34354 18.8742C7.62687 19.7358 9.31354 20.1667 11.0002 20.1667C12.6869 20.1667 14.3735 19.7358 15.6569 18.8742C16.8119 18.095 17.4535 17.05 17.4535 15.9133C17.4444 14.7858 16.8119 13.7408 15.6569 12.9708Z"
                      fill="url(#paint1_linear_403_1640)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_403_1640"
                        x1="6.646"
                        y1="2.2833"
                        x2="14.7451"
                        y2="10.541"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#7D7F88" />
                        <stop offset="1" stopColor="#7D7F88" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_403_1640"
                        x1="4.54687"
                        y1="12.1304"
                        x2="11.7345"
                        y2="23.2797"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#7D7F88" />
                        <stop offset="1" stopColor="#7D7F88" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-2 relative input-container">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full h-12 pl-[46px] pr-[90px] py-3 bg-zinc-100 rounded-[81px] border border-zinc-200 focus:outline-indigo-400 focus:bg-indigo-50 focus:border-indigo-400 justify-start items-center inline-flex"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <div className="icon-container">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1409 3.86834C15.4276 1.16417 11.0276 1.16417 8.33259 3.86834C6.43509 5.7475 5.86676 8.45167 6.60009 10.835L2.29176 15.1433C1.98926 15.455 1.77843 16.0692 1.84259 16.5092L2.11759 18.5075C2.21843 19.1675 2.83259 19.7908 3.49259 19.8825L5.49093 20.1575C5.93093 20.2217 6.54509 20.02 6.85676 19.6992L7.60843 18.9475C7.79176 18.7733 7.79176 18.48 7.60843 18.2967L5.83009 16.5183C5.56426 16.2525 5.56426 15.8125 5.83009 15.5467C6.09593 15.2808 6.53593 15.2808 6.80176 15.5467L8.58926 17.3342C8.76343 17.5083 9.05676 17.5083 9.23093 17.3342L11.1743 15.4C13.5484 16.1425 16.2526 15.565 18.1409 13.6858C20.8451 10.9817 20.8451 6.5725 18.1409 3.86834ZM13.2918 11C12.0268 11 11.0001 9.97334 11.0001 8.70834C11.0001 7.44334 12.0268 6.41667 13.2918 6.41667C14.5568 6.41667 15.5834 7.44334 15.5834 8.70834C15.5834 9.97334 14.5568 11 13.2918 11Z"
                      fill="#7D7F88"
                    />
                  </svg>
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
