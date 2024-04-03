import { useEffect } from "react";
import rightplace from "../assets/rightplace.jpg";

const RightPlace = ({
  setComponent,
  setPrevComponent,
  setWidth,
  loaderWidth,
}) => {
  useEffect(() => {
    setPrevComponent("intrest");
  }, []);
  return (
    <div className="mt-10 w-[70vw] m-auto">
      <div className="flex items-center my-32 mx-24">
        <img
          src={rightplace}
          alt=""
          width={500}
          className="flex-1"
        />
        <div className="flex-1">
          <h2 className="text-4xl font-bold">You're in the right place</h2>
          <p className="mt-8 text-lg font-semibold text-[#575757]">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          setComponent("comfort");
          setWidth(loaderWidth + 20);
        }}
        className="text-lg bg-black text-white px-10 py-2 rounded-md w-max mx-auto block mt-6"
      >
        Continue
      </button>
    </div>
  );
};
export default RightPlace;
