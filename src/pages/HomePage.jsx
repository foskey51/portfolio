import TechStack from "../components/TechStack";
import HeaderCard from "../components/HeaderCard";
import ContactLink from "../components/ContactLink";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [finishLoad, setFinishLoad] = useState(false)

    return (
        <>
            <div className="flex flex-col dark:bg-black bg-white">
                {/* Small screens */}
                <div className="block md:hidden px-4">
                    <HeaderCard />
                    <ContactLink />
                    <TechStack />
                    <Projects />
                </div>

                {/* Medium and large screens */}
                <div className="hidden transition-all ease-in-out duration-500 md:grid grid-cols-6 grid-rows-6 gap-4 lg:px-[10%] overflow-y-hidden overflow-x-hidden scale-[90%] dark:bg-black bg-white h-screen w-screen">

                    <div className="col-span-4 row-span-2 bg-white border-gray-300 border-2 dark:bg-inherit rounded-lg flex items-center justify-center">
                        <HeaderCard />
                    </div>

                    <div className="col-span-2 row-span-1 bg-white border-gray-300 border-2 dark:bg-inherit rounded -lg flex items-center justify-center">
                        <ContactLink />
                    </div>

                    <div className="col-span-2 row-span-5 bg-white border-gray-300 border-2 dark:bg-inherit rounded -lg flex flex-col overflow-hidden">
                        <TechStack />
                    </div>

                    <div className="col-span-4 row-span-5 bg-white border-gray-300 border-2 dark:bg-inherit rounded -lg flex flex-col overflow-y-auto">
                        <Projects />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
