import { useEffect, useState } from "react";
import aritmetic from "../assets/math/arithmetic.png";
import b_algebra from "../assets/math/b_algebra.png";
import i_algebra from "../assets/math/i_algebra.png";
import calculas from "../assets/math/calculas.png";
import ComfortLevelCard from "./ComfortLevelCard";

const data = [
  {
    id: 1,
    title: "Arithmetic",
    subTitle: "Introductory",
    image: aritmetic,
  },
  {
    id: 2,
    title: "Basic Algebra",
    subTitle: "Foundational",
    image: b_algebra,
  },
  {
    id: 3,
    title: "Intermediate Algebra",
    subTitle: "Intermediate",
    image: i_algebra,
  },
  {
    id: 4,
    title: "Calculas",
    subTitle: "Advanced",
    image: calculas,
  },
];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- xl:grid-cols-4 lg:mx-20 my-24 gap-4 content-center">
        {data.map((elem) => {
          return (
            <ComfortLevelCard
              key={elem.id}
              image={elem.image}
              title={elem.title}
              subTitle={elem.subTitle}
              id={elem.id}
              setSelected={setSelected}
              selected={selected}
            />
          );
        })}
      </div>

      <button
        disabled={selected == 0}
        onClick={() => {
          setComponent("onyourway");
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
