const CommonCard = ({ image, title, subtitle, setSelected, id, selected }) => {
  return (
    <div
      onClick={() => {
        setSelected(id);
      }}
      className={`${
        selected == id ? "border-yellow-300 shadow-lg" : ""
      } w-full py-4 px-6 border rounded-lg flex items-center gap-5 transition-all duration-500`}
    >
      <img
        src={image}
        alt=""
        width={50}
        height={50}
      />
      <p className="text-lg font-medium">
        {title} <span className=" text-gray-500">{subtitle}</span>
      </p>
    </div>
  );
};
export default CommonCard;
