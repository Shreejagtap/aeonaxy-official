import studentimage from "../../assets/student.png";
import professionalimage from "../../assets/professional.png";
import parent from "../../assets/parents.png";
import CommonCard from "../CommonCard";
import { useState } from "react";

const data = [
  {
    id: 1,
    image: studentimage,
    title: "Student",
    subtitle: "or soon to be enrolled",
  },
  {
    id: 2,
    image: professionalimage,
    title: "Professional",
    subtitle: "pursuing a career",
  },
  {
    id: 3,
    image: parent,
    title: "Parent",
    subtitle: "of a school-age child",
  },
  {
    id: 4,
    image: studentimage,
    title: "Lifelong Learner",
    subtitle: null,
  },
  {
    id: 5,
    image: studentimage,
    title: "Teacher",
    subtitle: null,
  },
  {
    id: 6,
    image: studentimage,
    title: "Other",
    subtitle: null,
  },
];

const Describe = ({ setComponent, setWidth, loaderWidth }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold text-center">
        Which describes you best?
      </h2>
      <p className="mt-8 text-center text-lg font-semibold text-[#575757]">
        This will help us personalize your experience
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
          setComponent("intrest");
          setWidth(loaderWidth + 20);
        }}
        className="disabled:bg-gray-300 text-lg bg-black text-white px-10 py-2 rounded-md w-max mx-auto block mt-6"
      >
        Continue
      </button>
    </div>
  );
};
export default Describe;
