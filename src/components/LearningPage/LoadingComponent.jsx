import spinner from "../../assets/spinner.svg";

const LoadingComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-8 mx-4">
      <img
        src={spinner}
        alt=""
        width={130}
      />
      <p className="font-bold text-3xl max-w-screen-md text-center">
        Finding learning path recommendations for you based on your responses
      </p>
    </div>
  );
};
export default LoadingComponent;
