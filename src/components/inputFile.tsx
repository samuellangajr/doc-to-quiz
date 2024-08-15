import folder from "@images/folder.png";
import Image from "next/image";
const InputFile: React.FC = () => {
    return (
        <div className="relative flex justify-center items-center bg-white border rounded-md border-dashed border-green-400 p-24 mt-16 max-w-md mx-auto md:max-w-xl">
            <div className="absolute">
                <div className="flex flex-col items-center justify-center">
                    <Image src={folder} alt="files" width={50} height={50} />
                    <span className="text-gray-500 font-normal">
                        Attach you files here
                    </span>
                </div>
            </div>
            <input type="file" multiple className="h-full w-full opacity-0" />
        </div>
    );
};

export default InputFile;
