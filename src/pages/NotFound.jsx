import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-40">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="text-2xl my-4">
        Page Not Found
      </p>

      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-xl"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;