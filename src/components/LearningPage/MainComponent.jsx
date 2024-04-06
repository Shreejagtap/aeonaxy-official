import mathImg from "../../assets/math.svg";

const MainComponent = () => {
  return (
    <div className=" min-h-screen flex flex-col gap-5 justify-center items-center mx-4 md:mx-auto md:w-[70vw] ">
      <h2 className="text-4xl font-bold text-center">
        Learning paths based on your answers
      </h2>
      <p className="text-lg mt-2 font-semibold text-gray-500 text-center">
        Choose one to get started. You can switch anytime.
      </p>
      <div className="flex flex-col gap-2 mt-10 2xl:mx-32 lg:flex-row">
        <div className="border flex items-center relative p-5 rounded-lg cursor-pointer gap-5">
          <p className="text-lg sm:text-xl ">
            <span className="font-bold">Foundational Math</span> Build your
            foundational skills in algebra, geometry, and probability.
          </p>
          <img
            src={mathImg}
            alt=""
            width={150}
          />
          <span className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm font-semibold bg-[#edb435] px-2 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>

        <div className="border  flex items-center relative p-5 rounded-lg cursor-pointer  gap-5">
          <p className="text-lg sm:text-xl ">
            <span className="font-bold">Mathematical Thinking</span> Build your
            foundational skills in algebra, geometry, and probability.
          </p>
          <img
            src={mathImg}
            alt=""
            width={150}
          />
        </div>
      </div>
    </div>
  );
};
export default MainComponent;
