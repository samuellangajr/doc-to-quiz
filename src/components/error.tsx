import Image from "next/image";
import errorImg from "@images/error.png";
import BackButton from "@/components/buttons/backButton";

interface ErrorDisplayProps {
    error: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
    return (
        <section className="flex flex-col items-center pt-20 pb-10 space-y-2">
            <Image src={errorImg} alt="Error" width={50} height={50} />
            <span className="font-bold text-center text-red-500">{error}</span>
            <BackButton />
        </section>
    );
};

export default ErrorDisplay;
