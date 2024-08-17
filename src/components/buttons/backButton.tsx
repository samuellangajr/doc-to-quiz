import { TiHome } from "react-icons/ti";

const BackButton: React.FC = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <div
            onClick={refreshPage}
            className="flex items-center space-x-1 border rounded-md shadow-md mb-2 cursor-pointer text-green-500 bg-white border-green-500 p-2 transition-transform duration-300 hover:scale-110"
        >
            <TiHome size={20} />
            <span>Back Home</span>
        </div>
    );
};

export default BackButton;
