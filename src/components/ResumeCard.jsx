import { DocumentTextIcon } from "@heroicons/react/24/solid";

const ResumeCard = () => {
    var link = "https://drive.google.com/drive/folders/1NUVD3r1q-AkabIaSafgvfl9xmJ0V8s0t";

    return (
        <div onClick={() => { window.open(link)}} className="group flex flex-col w-[90%] hover:cursor-pointer justify-center mb-5 h-full px-2 py-6 items-center border rounded-lg bg-gradient-to-tr backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black md:mb-0 md:h-full md:w-full md:px-0 md:pt-1 md:py-0 xl:py-2">

            {/* Header Section */}
            <div className="flex items-center justify-center w-full space-x-3 mb-3">
                <h2 className="text-4xl font-extrabold font-mono dark:text-gray-300">
                    Resume
                </h2>
                <DocumentTextIcon className="w-8 h-8 text-blue-500 dark:text-blue-400" aria-hidden="true" />
            </div>

            <div className="flex justify-center w-full hover:underline hover:cursor-pointer">
                <a
                    target="_blank"
                    href={link}
                    rel="noopener noreferrer"
                    aria-label="View Resume"
                    className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-105 hover:underline"
                >
                    Click here to view
                </a>
            </div>
        </div>
    );
};

export default ResumeCard;
