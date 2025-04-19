const TechStack = () => {
    const language = ["Java", "JavaScript", "C", "C++", "Python", "Bash"];
    const dbServices = ["Postgresql", "MySql", "MongoDB", "Docker", "Jenkins", "AWS"];
    const frameworksOrLibs = ["Spring Boot", "React", "NextJS", "JPA"];
    const learning = ["Rust"];
    const binary = ["01010000 01001001 01001110 01000111"];

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
        <div className="flex flex-col w-[90%] mb-5 pr-1 border rounded-lg bg-gradient-to-bl backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black overflow-auto md:h-full lg:h-full md:w-full lg:w-full md:pr-0 md:mb-0 lg:pr-0 lg:mb-0">

            <div>
                <a className="pl-3 text-[2rem] dark:text-white text-black">{"</>"}</a>
            </div>

            <div className="pl-3 pb-7">
                <a className="dark:text-gray-300 text-black font-extrabold text-4xl font-mono">TECH<br />STACK</a>
            </div>

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
    );
};

export default TechStack;
