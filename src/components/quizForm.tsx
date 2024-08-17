import BackButton from "@components/buttons/backButton";
import GoButton from "@components/buttons/goButton";

interface QuizData {
    question: string;
    options: string[];
    answer: string;
}

interface QuizFormProps {
    quizData: QuizData;
}

const QuizForm: React.FC<QuizFormProps> = ({ quizData }) => {
    return (
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl mt-10">
            <div className="md:flex">
                <div className="w-full p-3">
                    <div className="p-6 rounded-lg border-2 bg-white">
                        {/* Question */}
                        <div>
                            <h2 className="text-justify font-semibold">
                                {quizData.question}
                            </h2>
                        </div>
                        {/* Options */}
                        <div className="mt-4">
                            {quizData.options.map((option, index) => (
                                <div
                                    key={index}
                                    className="p-2 border rounded-md shadow-md mb-2 cursor-pointer hover:border-2 hover:border-green-400 text-sm"
                                >
                                    <p className="text-justify">{option}</p>
                                </div>
                            ))}
                        </div>
                        {/* Actions */}
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
