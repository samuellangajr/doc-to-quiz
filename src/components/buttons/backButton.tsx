import { TiHome } from "react-icons/ti";

const BackButton: React.FC = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <div
            onClick={refreshPage}
            className="flex items-center p-2 mb-2 space-x-1 text-green-500 transition-transform duration-300 bg-white border border-green-500 rounded-md shadow-md cursor-pointer hover:scale-110"
        >
            <TiHome size={20} />
            <span>Back Home</span>
        </div>
    );
};

export default BackButton;
