import Link from "next/link";
import { TiHome } from "react-icons/ti";
const BackButton: React.FC = () => {
    return (
        <div className="flex items-center space-x-1 border rounded-md shadow-md mb-2 cursor-pointer text-green-500 bg-white border-green-500 p-2 transition-transform duration-300 hover:scale-110">
            <TiHome size={20} />
            <Link href={"/"}>Back Home</Link>
        </div>
    );
};
export default BackButton;
