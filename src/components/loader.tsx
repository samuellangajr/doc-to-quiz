const Loader: React.FC = () => {
    return (
        <section className="py-36">
            <div className="flex items-center justify-center space-x-2">
                <div className="h-8 w-8 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-8 w-8 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
            </div>
        </section>
    );
};
export default Loader;
