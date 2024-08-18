import { IoIosSettings } from "react-icons/io";
import { FaRegSadTear } from "react-icons/fa";
import { useState } from "react";

const GenerateButton: React.FC = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleClick = () => {
        if (isDisabled) {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
            }, 1500); 
            return;
        }
    };

    return (
        <>
            <div
                onClick={handleClick}
                className={`flex items-center p-2 mb-2 space-x-1 transition-transform duration-300 border rounded-md shadow-md cursor-pointer ${
                    isDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:scale-110"
                } text-white`}
            >
                <IoIosSettings size={20} />
                <span>Generate More</span>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
                        <FaRegSadTear size={50} className="text-gray-400" />
                        <p className="mt-2">
                            This feature is currently unavailable.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default GenerateButton;
