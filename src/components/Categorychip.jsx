const Categorychip = ({ category, isChosen , onClick }) => {
  const { name } = category;

  return (
    <button onClick={onClick}
      className={`${
        isChosen ? "bg-gray-200 border-gray-200 " : "bg-transparent "
      } inline-flex items-center  border-gray-200 focus:outline-none  py-1 px-3 hover:bg-gray-200 hover:border-gray-200 rounded text-base mt-4 md:mt-0 shadow`}
    > 
      {name}{" "}
    </button>
  );
};

export default Categorychip;
