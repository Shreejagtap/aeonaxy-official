import { useEffect, useState } from "react";
import graphimg from "../assets/graph.png";
import globe from "../assets/globe.png";
import maths from "../assets/maths.png";
import target from "../assets/target.png";
import eyes from "../assets/eyes.png";
import CommonCard from "./CommonCard";

const Intrest = ({ setComponent, setPrevComponent, setWidth, loaderWidth }) => {
  const data = [
    {
      id: 1,
      image: graphimg,
      title: "Learning specific skills to advance my career",
      subtitle: null,
    },
    {
      id: 2,
      image: globe,
      title: "Exploring new topics I'm interested in",
      subtitle: null,
    },
    {
      id: 3,
      image: maths,
      title: "Refreshing my math foundations",
      subtitle: null,
    },
    {
      id: 4,
      image: target,
      title: "Exercising my brain to stay sharp",
      subtitle: null,
    },
    {
      id: 5,
      image: eyes,
      title: "Something else",
      subtitle: null,
    },
  ];

  useEffect(() => {
    setPrevComponent("describe");
  }, []);
  const [selected, setSelected] = useState(0);
  return (
    <div className="mt-10 mx-4">
      <h2 className="text-4xl font-bold text-center">
        Which are you most interested in?
      </h2>
      <p className="mt-8 text-center text-lg font-semibold text-[#575757]">
        Choose just one. This will help us get you started (but won't limit your
        experience)
      </p>

      <div className="max-w-2xl m-auto mt-10 cursor-pointer flex flex-col gap-2">
        {data.map((elem) => {
          return (
            <CommonCard
              key={elem.id}
              image={elem.image}
              title={elem.title}
              subtitle={elem.subtitle}
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
export default Intrest;
