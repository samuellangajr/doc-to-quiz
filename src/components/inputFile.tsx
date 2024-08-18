"use client";
import { ChangeEvent } from "react";
import folder from "@images/folder.png";
import Image from "next/image";

interface InputFileProps {
    onFileUpload: (file: File) => void;
}

const InputFile: React.FC<InputFileProps> = ({ onFileUpload }) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <section className="max-w-md mx-auto mt-10 overflow-hidden rounded-lg md:max-w-xl">
            <div className="md:flex">
                <div className="w-full p-3">
                    <div className="relative flex items-center justify-center h-48 bg-white border-2 border-green-500 border-dotted rounded-lg">
                        <div className="absolute">
                            <div className="flex flex-col items-center">
                                <Image
                                    src={folder}
                                    alt="files"
                                    width={50}
                                    height={50}
                                />
                                <span className="block font-normal text-gray-500">
                                    Attach your files here
                                </span>
                            </div>
                        </div>
                        <input
                            type="file"
                            className="w-full h-full opacity-0 cursor-pointer"
                            accept=".pdf, image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InputFile;
