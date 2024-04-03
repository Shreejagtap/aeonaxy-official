import { useState } from "react";

const LearningPaths = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return <>{isLoading ? <h2>Loading</h2> : <h2>done Loading</h2>}</>;
};
export default LearningPaths;
