import { CoffeeIcon } from "../utils/LogoIcon";

const Blog = () => {
    return (
        <div className="group flex flex-col w-[90%] mb-5 h-full px-2 py-6 items-center border rounded-lg bg-gradient-to-tr backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black md:mb-0 md:h-full md:w-full overflow-hidden md:px-0 md:pt-1 md:py-0 xl:py-2">

            {/* Header */}
            <div className="flex justify-center items-center w-full space-x-3">
                <h2 className="dark:text-gray-300 text-black font-extrabold text-4xl font-mono">
                    Blog
                </h2>
                <div className="flex items-center space-x-4 md:scale-[90%]">
                    <CoffeeIcon className="size-10  mb-4" />
                </div>
            </div>

            {/* Subtitle */}
            <div className="w-full px-4 text-center md:text-md dark:text-gray-400 text-gray-500 transition-colors duration-300 mb-3">
                <p>I take a sip of coffee and write sometimes...</p>
            </div>

            {/* Link */}
            <div className="flex justify-center w-full mb-2">
                <a
                    href="https://medium.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm transition-transform duration-300 group-hover:scale-[1.05]"
                >
                    Read on Medium
                </a>
            </div>

        </div>
    );
};

export default Blog;