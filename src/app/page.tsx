import InputFile from "@/components/inputFile";
import Loader from "@/components/loader";
export default function Home() {
    return (
        <main className="py-20">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center">
                Convert files into{" "}
                <span className="text-white border p-2 sm:p-3 bg-green-400 rounded-lg">
                    Quizzes
                </span>
            </h1>
            <section>
                <InputFile />
            </section>
            <div className="mt-10">
                <Loader />
            </div>
        </main>
    );
}
