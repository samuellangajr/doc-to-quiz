import QuizForm from "@/components/quizForm";
export default function QuizPage() {
    return (
        <main className="pt-20">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center">
                <span className="text-white border p-2 sm:p-3 bg-green-400 rounded-lg">
                    Topic
                </span>{" "}
                Quiz topic
            </h1>
            <section>
               <QuizForm />
            </section>
        </main>
    );
}
