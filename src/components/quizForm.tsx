import BackButton from "@components/buttons/backButton";
import GoButton from "@components/buttons/goButton";
const QuizForm: React.FC = () => {
    return (
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl mt-10">
            <div className="md:flex">
                <div className="w-full p-3">
                    <div className="p-6 rounded-lg border-2 bg-white">
                        {/*Question*/}
                        <div>
                            <h2 className="text-justify font-semibold">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellat minima quibusdam
                                debitis possimus illum nihil quia sint?
                            </h2>
                        </div>
                        {/*Option*/}
                        <div className="mt-4">
                            <div className="p-2 border rounded-md shadow-md mb-2 cursor-pointer hover:border-2 hover:border-green-400 text-sm">
                                <p className="text-justify">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </p>
                            </div>
                            <div className="p-2 border rounded-md shadow-md mb-2 cursor-pointer hover:border-2 hover:border-green-400 text-sm">
                                <p className="text-justify">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </p>
                            </div>
                            <div className="p-2 border rounded-md shadow-md mb-2 cursor-pointer hover:border-2 hover:border-green-400 text-sm">
                                <p className="text-justify">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </p>
                            </div>
                            <div className="p-2 border rounded-md shadow-md mb-2 cursor-pointer hover:border-2 hover:border-green-400 text-sm">
                                <p className="text-justify">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        {/*Actions*/}
                        <div className="flex justify-between mt-6">
                            <BackButton />
                            <GoButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default QuizForm;
