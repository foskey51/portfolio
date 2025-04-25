import { CoffeeIcon } from "../utils/LogoIcon";

const Blog = () => {
    return (
        <div className="group flex flex-col w-[90%] mb-5 h-full px-2 py-6 items-center border rounded-lg bg-gradient-to-tr backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black md:mb-0 md:h-full md:w-full overflow-hidden md:px-0 md:pt-1 md:py-0 xl:py-2">

            <div className="flex justify-between items-center space-x-2">
                <div>
                    <a className="dark:text-gray-300 text-black font-extrabold text-4xl font-mono">Blog</a>
                </div>
                <div className="flex items-center space-x-4 mb-3 md:scale-[90%]">
                    <CoffeeIcon className="size-10" />
                </div>
            </div>

            <div className="text-wrap md:text-md dark:text-gray-400 text-gray-500 transition-colors duration-300">
                <p className="ml-3">I take a sip of coffee and write sometimes...</p>
            </div>

            <div className="flex my-auto pt-3 md:pt-0">
                <a
                    href="https://medium.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm"
                >
                    Read on Medium
                </a>
            </div>
        </div>
    );
};

export default Blog;