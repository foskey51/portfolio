import TechStack from "../components/TechStack";
import HeaderCard from "../components/HeaderCard";
import ContactLink from "../components/ContactLink";
import Projects from "../components/Projects";
import SpotifyHolder from "../components/SpotifyHolder";
import Blog from "../components/Blog";

const HomePage = () => {

    return (
        <>
            <div className="flex flex-col dark:bg-black bg-white">
                {/* Small screens */}
                <div className="block md:hidden px-4">
                    <HeaderCard />
                    <ContactLink />
                    <TechStack />
                    <Blog />
                    <Projects />
                    <SpotifyHolder />
                </div>

                {/* Medium and large screens */}
                <div className="hidden transition-all ease-in-out duration-500 md:grid grid-cols-6 grid-rows-6 gap-4 lg:px-[10%] 2xl:px-[20%] overflow-y-hidden overflow-x-hidden scale-[90%] h-screen w-screen">

                    <div className="col-span-4 row-span-2 bg-white border-gray-300 border-2 dark:bg-black rounded-lg flex items-center justify-center">
                        <HeaderCard />
                    </div>

                    <div className="col-span-2 row-span-1 bg-white border-gray-300 border-2 dark:bg-black rounded-lg flex items-center justify-center">
                        <ContactLink />
                    </div>

                    <div className="col-span-2 row-span-7 bg-white border-gray-300 border-2 dark:bg-black rounded-lg flex flex-col overflow-auto">
                        <TechStack />
                    </div>

                    <div className="col-span-2 row-span-6 bg-white border-gray-300 border-2 dark:bg-black rounded-lg flex flex-col overflow-auto">
                        <Projects />
                    </div>
                    <div className="col-span-2 row-span-3 bg-white border-gray-300 border-1 dark:bg-black rounded-lg flex flex-col overflow-hidden">
                        <SpotifyHolder />
                    </div>
                    <div className="col-span-2 row-span-3 bg-white border-gray-300 border-2 dark:bg-black rounded-lg flex flex-col overflow-hidden">
                        <Blog />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
