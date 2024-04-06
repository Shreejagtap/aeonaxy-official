import { useState } from "react";
import LoadingComponent from "../components/LearningPage/LoadingComponent";
import MainComponent from "../components/LearningPage/MainComponent";

const LearningPaths = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return <>{isLoading ? <LoadingComponent /> : <MainComponent />}</>;
};
export default LearningPaths;
