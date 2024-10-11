import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center border-b border-gray-200">
      <Link
        to="/"
        className="ms-20 flex text-3xl text-slate-600 hover:cursor-pointer"
      >
        <h1 className="font-sans mt-1">AI-</h1>
        <h1 className="font-sans font-bold mt-1">Town</h1>
      </Link>

      <nav>
        <Link
          to="/login"
          className="ps-8 pe-8 pt-2 pb-2 mr-20 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-600 transform transition duration-300 hover:text-blue-50"
        >
          Sign in
        </Link>
      </nav>
    </header>
  );
};

export default Header;
