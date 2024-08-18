import { useState } from "react";
import BackButton from "@components/buttons/backButton";
import GenerateButton from "@/components/buttons/generateButton";

interface QuizData {
    question: string;
    options: string[];
    answer: string;
}

interface QuizFormProps {
    quizData: QuizData;
}

const QuizForm: React.FC<QuizFormProps> = ({ quizData }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsCorrect(option === quizData.answer);
    };

    const optionLetters = ["A", "B", "C", "D"];

    return (
        <section className="max-w-md mx-auto mt-10 overflow-hidden rounded-lg md:max-w-xl">
            <div className="md:flex">
                <div className="w-full p-3">
                    <div className="p-6 bg-white border-2 rounded-lg">
                        {/* Question */}
                        <div>
                            <h2 className="font-semibold text-justify">
                                {quizData.question}
                            </h2>
                        </div>
                        {/* Options */}
                        <div className="mt-4">
                            {quizData.options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className={`p-2 border rounded-md shadow-md mb-2 cursor-pointer text-sm ${
                                        selectedOption
                                            ? option === quizData.answer
                                                ? "border-2 border-green-400"
                                                : option === selectedOption
                                                ? "border-2 border-red-400"
                                                : "border"
                                            : "hover:border-2 hover:border-gray-400"
                                    }`}
                                >
                                    <p>
                                        <span className="mr-2 font-semibold">
                                            {optionLetters[index]}.
                                        </span>
                                        {option}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Actions */}
                        <section className="flex justify-between mt-6">
                            <BackButton />
                            <GenerateButton />
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuizForm;
