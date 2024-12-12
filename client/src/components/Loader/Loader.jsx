import { FaSpinner } from "react-icons/fa6";

const Loader = ({ size }) => {
  return (
    <FaSpinner className="animate-spin" size={size} />
  );
};

export default Loader;
