import TechStack from "../components/TechStack";
import HeaderCard from "../components/HeaderCard";
import ContactLink from "../components/ContactLink";
import Projects from "../components/Projects";

const HomePage = () => {
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
                <div className="hidden md:grid grid-cols-6 grid-rows-6 gap-4 p-6 px-32 min-h-screen overflow-y-auto overflow-x-hidden scale-90">

                    <div className="col-span-4 row-span-2 bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg flex items-center justify-center">
                        <HeaderCard />
                    </div>

                    <div className="col-span-2 row-span-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center">
                        <ContactLink />
                    </div>

                    <div className="col-span-2 row-span-5 bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4 flex flex-col overflow-auto">
                        <TechStack />
                    </div>

                    <div className="col-span-4 row-span-5 bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4 flex flex-col overflow-y-auto">
                        <Projects />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
