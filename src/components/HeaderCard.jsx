import { useEffect, useState } from "react";
import useStore from "../../store";
import { MoonIcon } from "@heroicons/react/24/outline";
import { IoBulbOutline } from "react-icons/io5";

const HeaderCard = () => {
  const [timer, setTimer] = useState(new Date());
  const darkMode = useStore(state => state.darkMode);
  const { setDarkMode } = useStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="group flex flex-col w-[90%] h-full justify-between mt-12 mb-5 border rounded-lg bg-gradient-to-br backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 md:h-full md:w-full lg:h-full lg:w-full md:mt-0 md:mb-0 lg:mt-0 lg:mb-0">      <div>
      <div className="flex items-center justify-between mt-5 ml-4">
        <img
          className="h-20 w-20 rounded-full"
          src="https://i.ibb.co/4w9zmwFn/176365353.jpg"
          alt="Profile"
        />
        <div className="flex flex-col ml-4 dark:text-white text-black">
          <a className="font-bold text-lg">Dhanush H S</a>
          <a className="text-slate-500 dark:text-gray-400 cursor-pointer" onClick={() => { window.open("https://www.github.com/foskey51") }}>@foskey51</a>
        </div>
        {/*DarkMode Toggle*/}
        <div onClick={toggleDarkMode} className="cursor-pointer ml-auto mr-6 px-2 dark:text-white text-black rounded-lg border-gray-300">
          <button onClick={toggleDarkMode}>
            {darkMode ? <IoBulbOutline className="size-6 hover:text-amber-300" /> : <MoonIcon className="size-5 hover:text-amber-500" />}
          </button>
        </div>
      </div>

      <div className="mt-6 ml-6 mr-6 text-black dark:text-white">
        <h2 className="text-sm font-semibold pb-1">Software Developer</h2>
        <p className="dark:text-gray-400 text-gray-600 text-sm pb-2">
          I use Arch b/w
        </p>
        <div className="hidden md:flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">Backend</span>
          <span className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">Web Apps</span>
          <span className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">Mobile Apps</span>
        </div>
      </div>
    </div>

      <div className="flex flex-col items-end space-y-1 mt-4 mb-4 mr-4 md:mt-0">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="dark:text-slate-400 text-gray-500 text-xs">Available For Work</span>
        </div>
        <span className="dark:text-slate-400 text-gray-500 text-xs tracking-wide">
          {timer.toDateString()}&nbsp;&nbsp;{timer.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default HeaderCard;