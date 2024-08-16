import Link from "next/link";
import { IoIosSettings } from "react-icons/io";
const GoButton: React.FC = () => {
    return (
        <div className="flex items-center space-x-1 border rounded-md shadow-md mb-2 cursor-pointer text-white bg-green-500 p-2 transition-transform duration-300 hover:scale-110">
            <IoIosSettings size={20} />
            <Link href={"/"}>Generate More</Link>
        </div>
    );
};
export default GoButton;