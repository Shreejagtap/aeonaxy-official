import { useEffect, useState } from "react";
import aritmetic from "../assets/math/arithmetic.png";
import b_algebra from "../assets/math/b_algebra.png";
import i_algebra from "../assets/math/i_algebra.png";
import calculas from "../assets/math/calculas.png";

const ComfortLevel = ({
  setComponent,
  setPrevComponent,
  setWidth,
  loaderWidth,
}) => {
  useEffect(() => {
    setPrevComponent("rightplace");
  }, []);
  const [selected, setSelected] = useState(0);
  return (
    <div className="mt-10 w-[70vw] m-auto">
      <h2 className="text-4xl font-bold text-center">
        What is your math comfort level?
      </h2>
      <p className="mt-8 text-center text-lg font-semibold text-[#575757]">
        Choose the highest level you feel confident in - you can always adjust
        later.
      </p>

      <div className="grid grid-cols-4 mx-20 my-24 gap-4">
        <div className="border flex flex-col p-10 rounded-lg">
          <div className="h-3/5">
            <img
              src={aritmetic}
              alt=""
              height={100}
              className="m-5"
            />
          </div>
          <div className="h-2/5 flex flex-col items-center justify-center">
            <h2 className="text-xl text-center font-medium ">Arithmetic</h2>
            <p className="text-xl text-center text-gray-400 mt-1">
              Introductory
            </p>
          </div>
        </div>
        <div className="border flex flex-col p-10 rounded-lg">
          <div className="h-3/5">
            <img
              src={b_algebra}
              alt=""
              height={100}
              className="m-5"
            />
          </div>
          <div className="h-2/5 flex flex-col items-center justify-center">
            <h2 className="text-xl text-center font-medium ">Basic Algebra</h2>
            <p className="text-xl text-center text-gray-400 mt-1">
              Foundational
            </p>
          </div>
        </div>
        <div className="border flex flex-col p-10 rounded-lg">
          <div className="h-3/5 flex justify-center">
            <img
              src={i_algebra}
              alt=""
              height={100}
              className="m-5"
            />
          </div>
          <div className="h-2/5 flex flex-col items-center justify-center">
            <h2 className="text-xl text-center font-medium ">Intermediate Algebra</h2>
            <p className="text-xl text-center text-gray-400 mt-1">
              Intermediate
            </p>
          </div>
        </div>
        <div className="border flex flex-col p-10 rounded-lg">
          <div className="h-3/5">
            <img
              src={calculas}
              alt=""
              height={100}
              className="m-5"
            />
          </div>
          <div className="h-2/5 flex flex-col items-center justify-center">
            <h2 className="text-xl text-center font-medium ">Calculas</h2>
            <p className="text-xl text-center text-gray-400 mt-1">Advanced</p>
          </div>
        </div>
      </div>

      <button
        disabled={selected == 0}
        onClick={() => {
          setComponent("rightplace");
          setWidth(loaderWidth + 20);
        }}
        className="disabled:bg-gray-300 text-lg bg-black text-white px-10 py-2 rounded-md w-max mx-auto block mt-6"
      >
        Continue
      </button>
    </div>
  );
};
export default ComfortLevel;
