"use client";
import { useState } from "react";
import Image from "next/image";
import errorImg from "@images/error.png";
import InputFile from "@/components/inputFile";
import Loader from "@/components/loader";
import QuizForm from "@/components/quizForm";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(false);
    const [quizData, setQuizData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null); // Save selected file

    const handleFileUpload = async (file: File) => {
        setLoading(true);
        setError(null);
        setQuizData(null);
        setFile(file); //store selected file

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/gemini", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Something went wrong");

            const result = await res.json();
            if (result.error) {
                throw new Error(result.error);
            }

            setQuizData(result.quizData);
        } catch (error: any) {
            console.error("Error:", error);
            setError(error.message);
            setQuizData(null);
        } finally {
            setLoading(false);
        }
    };
    return (
        <main className="pt-20">
            <h1 className="text-xl font-bold text-center text-black sm:text-2xl md:text-3xl">
                Convert files into{" "}
                <span className="p-2 text-white bg-green-400 border rounded-lg sm:p-3">
                    Quizzes
                </span>
            </h1>
            {!loading && !quizData && !error && (
                <InputFile onFileUpload={handleFileUpload} />
            )}

            {loading && <Loader />}
            {error && (
                <section className="flex flex-col items-center pt-20 pb-10">
                    <Image src={errorImg} alt="files" width={50} height={50} />
                    <span className="font-bold text-center text-red-500">
                        {error}
                    </span>
                </section>
            )}
            {quizData && (
                <QuizForm
                    quizData={quizData}
                    onGenerateMore={() => handleFileUpload(file!)}
                />
            )}
            <section className="flex justify-center items-center mt-6">
                <p className="text-gray-600 text-xs">
                    <span className="font-semibold">Note: </span>Only PDF files and Images are accepted.
                </p>
            </section>
        </main>
    );
}
