const ComfortLevelCard = ({
  image,
  title,
  subTitle,
  selected,
  setSelected,
  id,
}) => {
  return (
    <div
      onClick={() => {
        setSelected(id);
      }}
      className={`${
        selected == id ? "border-yellow-300 shadow-lg" : ""
      } border flex flex-col p-10 rounded-lg transition-all duration-300 cursor-pointer`}
    >
      <div className="h-3/5 flex justify-center">
        <img
          src={image}
          alt=""
          height={100}
          className="m-5"
        />
      </div>
      <div className="h-2/5 flex flex-col items-center justify-center">
        <h2 className="text-xl text-center font-medium ">{title}</h2>
        <p className="text-xl text-center text-gray-400 mt-1">{subTitle}</p>
      </div>
    </div>
  );
};
export default ComfortLevelCard;
