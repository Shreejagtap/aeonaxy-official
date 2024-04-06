import { useEffect } from "react";
import onyourway from "../assets/onyourway.svg";
import { Link } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";

const OnYourWay = ({ setPrevComponent }) => {
  useEffect(() => {
    setPrevComponent("comfort");
  }, []);

  return (
    <div className="mt-24 mx-4 md:mx-auto md:w-[80vw] lg:w-[70vw] m-auto">
      <div className="flex items-center justify-between flex-col md:flex-row gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src={onyourway}
            alt=""
            width={400}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold ">You're on your way!</h2>
          <div className="flex mb-3 mt-10">
            <MdOutlineStarPurple500
              color="orange"
              size={40}
            />
            <MdOutlineStarPurple500
              color="orange"
              size={40}
            />
            <MdOutlineStarPurple500
              color="orange"
              size={40}
            />
            <MdOutlineStarPurple500
              color="orange"
              size={40}
            />
            <MdOutlineStarPurple500
              color="orange"
              size={40}
            />
          </div>
          <p className="text-lg font-medium italic text-[#575757] mb-10">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </p>
          <span className="italic text-xl font-medium ">-Jacob S.</span>
        </div>
      </div>

      <Link
        to="/LearningPaths"
        className="disabled:bg-gray-300 text-lg bg-black text-white px-10 py-2 rounded-md w-max mx-auto block mt-6"
      >
        Continue
      </Link>
    </div>
  );
};
export default OnYourWay;
