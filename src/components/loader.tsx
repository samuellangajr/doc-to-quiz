const Loader: React.FC = () => {
    return (
        <div className="py-36">
            <div className="flex space-x-2 justify-center items-center">
                <div className="h-8 w-8 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-8 w-8 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-8 w-8 bg-green-500 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};
export default Loader;
