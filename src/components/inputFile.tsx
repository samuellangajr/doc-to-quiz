import folder from "@images/folder.png";
import Image from "next/image";
const InputFile: React.FC = () => {
    return (
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl mt-10">
            <div className="md:flex">
                <div className="w-full p-3">
                    <div className="relative border-dotted h-48 rounded-lg border-2 border-green-500 bg-white flex justify-center items-center">
                        <div className="absolute">
                            <div className="flex flex-col items-center">
                                <Image
                                    src={folder}
                                    alt="files"
                                    width={50}
                                    height={50}
                                />
                                <span className="block text-gray-500 font-normal">
                                    Attach you files here
                                </span>
                            </div>
                        </div>
                        <input
                            type="file"
                            className="cursor-pointer h-full w-full opacity-0"
                            name=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputFile;
