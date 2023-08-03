import { Link } from "react-router-dom";
import backImg from "../assets/backImg.jpeg";
import logo from "../assets/logo.png";

const login = () => {
  return (
    <div className="bg-white h-screen flex">
      {/* Left Column */}
      <div className="w-1/2 hidden md:block p-6">
        <img src={backImg} alt="backImg" className="object-cover h-full rounded-2xl" />
        <div className="absolute top-20 left-10">
          <img src={logo} alt="logo" className="" />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 md:justify-normal justify-center flex items-center p-5">
        <div className="m-4 md:m-20 w-full p-10 md:p-0">
          <h1 className="text-[#7181A1] text-2xl md:text-xl mb-2 lg:mb-4 flex flex-col">
            Welcome{" "}
            <span className="text-[#131926] text-4xl font-bold">Login</span>
          </h1>
          <div className="flex flex-col gap-2 w-full md:w-72 lg:w-80 xl:w-96 mt-10">
            <label>
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="John.snow@gmail.com"
              className="px-4 py-2 border rounded-md placeholder-[#C3CBDE] outline-none"
            />
          </div>
          <div className="flex flex-col mt-2 md:mt-5 gap-2 w-full md:w-72 lg:w-80 xl:w-96">
            <label>
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password" 
              placeholder="*********"
              className="px-4 py-2 border rounded-md placeholder-[#C3CBDE] outline-none"
            />
            <h1 className="text-sm text-right text-[#68F]">Forgot password?</h1>
          </div>
          <div className="mt-4 md:mt-10 gap-3 flex flex-col">
            <button className="bg-[#194DFF] w-full md:w-72 lg:w-80  rounded-md px-3 py-3 text-white">
              Login
            </button>
            <h1 className="text-md text-[#A0ABC0]">
              Don’t have an account?{" "}
              <Link to='/signin'>
              <span className="text-[#3361FF] text-lg">Sign up</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
