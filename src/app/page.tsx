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

    const handleFileUpload = async (file: File) => {
        setLoading(true);
        setError(null);

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
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center">
                Convert files into{" "}
                <span className="text-white border p-2 sm:p-3 bg-green-400 rounded-lg">
                    Quizzes
                </span>
            </h1>
            {!loading && !quizData && !error && (
                <section>
                    <InputFile onFileUpload={handleFileUpload} />
                </section>
            )}

            {loading && (
                <section>
                    <Loader />
                </section>
            )}
            {error && (
                <section>
                    <div className="flex flex-col items-center pt-20 pb-10">
                        <Image
                            src={errorImg}
                            alt="files"
                            width={50}
                            height={50}
                        />
                        <span className="text-red-500 text-center font-bold">
                            {error}
                        </span>
                    </div>
                </section>
            )}
            {quizData && (
                <section>
                    <QuizForm quizData={quizData} />
                </section>
            )}
        </main>
    );
}
