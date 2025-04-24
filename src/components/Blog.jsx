import { FaMedium } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className="group flex flex-col w-[90%] mb-5 h-full pl-2 pb-2 pr-1 pt-3 border rounded-lg bg-gradient-to-tr backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black md:mb-0 md:h-full md:w-full overflow-auto">
            <div className="font-extrabold text-xl md:text-2xl font-mono dark:text-gray-300 text-black transition-colors duration-300">
                I write stuff sometimes... ✍️
            </div>

            <div className="flex items-center gap-2 mt-auto pt-4">
                <a 
                    href="https://medium.com/@yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm"
                >
                    <FaMedium className="text-lg" />
                    Read on Medium
                </a>
            </div>
        </div>
    );
};

export default Blog;