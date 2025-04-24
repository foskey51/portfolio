const TechStack = () => {
    const language = ["Java", "JavaScript", "C", "C++", "Python", "Bash"];
    const dbServices = ["Postgresql", "MongoDB", "Docker", "MySql", "Postman", "Jenkins", "AWS"];
    const frameworksOrLibs = ["Spring Boot", "React","React","React","React", "NextJS", "JPA"];
    const learning = ["Rust"];

    const renderArray = (props) => {
        return (
            <div className="flex flex-wrap gap-2 pl-4 pt-2 select-none">
                {props.map((key, index) => (
                    <a key={index} className="border-2 dark:border-gray-300 rounded-md px-2 dark:text-white">{key}</a>
                ))}
            </div>
        );
    };

    return (
        <div className="group flex flex-col w-[90%] mb-5 pr-1 border rounded-lg bg-gradient-to-bl backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black overflow-auto md:h-full lg:h-full md:w-full lg:w-full md:pr-0 md:mb-0 lg:pr-0 lg:mb-0">
            <div>
                <a className="pl-3 text-[2rem] dark:text-white text-black group-hover:animate-pulse" >{"</>"}</a>
            </div>

            <div className="pl-3 pb-7">
                <a className="dark:text-gray-300 text-black font-extrabold text-4xl font-mono">TECH<br />STACK</a>
            </div>
            <span className="h-1 w-0 bg-black dark:bg-gray-400 transition-all duration-500 ease-in-out group-hover:w-[75%]"></span>
            <div className="pl-1">
                <div className="pl-2 pt-4">
                    <span className="font-mono font-semibold">Languages:</span>
                    {renderArray(language)}
                </div>

                <div className="pl-2 pt-5">
                    <span className="font-mono font-semibold">Framework & Library:</span>
                    {renderArray(frameworksOrLibs)}
                </div>

                <div className="pl-2 pt-5">
                    <span className="font-mono font-semibold">DB & Services:</span>
                    {renderArray(dbServices)}
                </div>

                <div className="pl-2 pt-5 pb-5">
                    <span className="font-mono font-semibold">Currently Learning:</span>
                    {renderArray(learning)}
                </div>
            </div>
        </div>
    );
};

export default TechStack;