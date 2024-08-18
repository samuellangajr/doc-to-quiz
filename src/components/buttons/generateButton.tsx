import { IoIosSettings } from "react-icons/io";

interface GenerateButtonProps {
    onClick: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => {
    return (
        <div
            className="flex items-center p-2 mb-2 space-x-1 text-white transition-transform duration-300 bg-green-500 border rounded-md shadow-md cursor-pointer hover:scale-110"
            onClick={onClick}
        >
            <IoIosSettings size={20} />
            <span>Generate More</span>
        </div>
    );
};

export default GenerateButton;
