const Navbar = ({ onSearch = () => {} }) => {
  return (
    <div className="navbar shadow-sm px-4 sm:px-8 lg:px-28 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:flex sm:justify-between">
      <div className="flex-1">
        <a href="/" className="sm:text-white btn btn-ghost lg:text-black text-xl sm:text-2xl ">
          IoT Hub
        </a>
      </div>
      <div className="w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          className="border border-black text-black px-4 sm:px-5 rounded-lg py-2 w-full sm:w-64"
        />
      </div>
    </div>
  );
};

export default Navbar;
