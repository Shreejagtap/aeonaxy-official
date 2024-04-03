import { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import Describe from "../components/Describe/Describe";
import Intrest from "../components/Intrest";
import RightPlace from "../components/RightPlace";
import ComfortLevel from "../components/ComfortLevel";

const HomePage = () => {
  const [components, setComponents] = useState("describe");
  const [prevComponent, setPrevComponent] = useState(null);
  const [loaderWidth, setLoaderWidth] = useState(20);
  return (
    <div>
      <div className=" m-auto mt-16 w-[70vw] flex gap-2 items-center">
        {components !== "describe" && (
          <button
            onClick={() => {
              setComponents(prevComponent);
              setLoaderWidth(loaderWidth - 20);
            }}
          >
            <SlArrowLeft />
          </button>
        )}
        <div className="h-1.5 flex-1 rounded-full overflow-hidden bg-gray-200 ">
          <div
            className=" bg-[#149B7B] h-full transition-all duration-300"
            style={{ width: `${loaderWidth}%` }}
          ></div>
        </div>
      </div>
      {components === "describe" && (
        <Describe
          setComponent={setComponents}
          setWidth={setLoaderWidth}
          loaderWidth={loaderWidth}
        />
      )}
      {components === "intrest" && (
        <Intrest
          setComponent={setComponents}
          setPrevComponent={setPrevComponent}
          setWidth={setLoaderWidth}
          loaderWidth={loaderWidth}
        />
      )}
      {components === "rightplace" && (
        <RightPlace
          setComponent={setComponents}
          setPrevComponent={setPrevComponent}
          setWidth={setLoaderWidth}
          loaderWidth={loaderWidth}
        />
      )}
      {components === "comfort" && (
        <ComfortLevel
          setComponent={setComponents}
          setPrevComponent={setPrevComponent}
          setWidth={setLoaderWidth}
          loaderWidth={loaderWidth}
        />
      )}
    </div>
  );
};
export default HomePage;
