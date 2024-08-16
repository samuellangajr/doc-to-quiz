import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-8 md:py-10 space-y-4 md:space-y-0 md:space-x-8 text-sm ">
                <div className="flex space-x-2">
                    <FaGithub size={20} />
                    <Link
                        href={"https://github.com/samuellangajr/doc-to-quiz"}
                        className="hover:underline"
                        style={{ color: "#0c0c0d" }}
                    >
                        GitHub repository
                    </Link>
                </div>
                
                <div className="flex space-x-2 text-gray-500">
                    <span>Created by</span>
                    <Link
                        href={"https://www.linkedin.com/in/samuel-langa-92ab99287/"}
                        className="hover:underline "
                        style={{ color: "#0c0c0d" }}
                    >
                        Samuel Langa
                    </Link>
                </div>
            </div>
        </footer>
    );
};
export default Footer;