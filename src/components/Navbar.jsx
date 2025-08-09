const Navbar = ({ onSearch = () => {} }) => {
  return (
    <div className="navbar shadow-sm px-28">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-2xl text-black">
          IoT Hub
        </a>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          className="border px-5 rounded-lg py-3 md:w-auto"
        />
      </div>
    </div>
  );
};

export default Navbar;
