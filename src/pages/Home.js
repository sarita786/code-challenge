import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-4 sm:px-0">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <img src="/images/home-image.png" alt="home" className="w-full" />
        <div className="text-center text-gray-900 text-2xl font-semibold font-['SF Pro Display'] leading-loose flex justify-center">
          New Place, New Home!
        </div>
        <div className="text-center text-zinc-500 text-base font-normal font-['SF Pro Display'] leading-normal tracking-tight">
          Are you ready to uproot and start over in a new area? Placoo will help
          you on your journey!
        </div>
        <div className="flex justify-center items-center my-8 flex-col gap-0 md:gap-4">
          <div className="w-full h-[50px] py-[13px] bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-[30px] justify-center items-center inline-flex mb-4 md:mb-0">
            <Link to={"/login"}>
              <div className="text-center text-white text-base font-medium font-['SF Pro Display'] leading-normal">
                Log in
              </div>
            </Link>
          </div>
          <Button
            text="Sign up"
            bgColor="btext-slate-600"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
