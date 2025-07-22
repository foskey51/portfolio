import { useEffect, useState } from "react";
import useStore from "../../store";

const HeaderCard = () => {
    const [text, setText] = useState('');
    const [timer, setTimer] = useState(new Date());
    const strings = ['Backend', 'System Designs', 'WebApp', 'DevOps'];
    const [stringIndex, setStringIndex] = useState(0);
    const darkMode = useStore(state => state.darkMode);
    const { setDarkMode } = useStore();
    let i = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (i < strings[stringIndex].length) {
                setText(strings[stringIndex].substring(0, i + 1));
                i++;
            } else {
                setTimeout(() => {
                    setText('');
                    i = 0;
                    setStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
                }, 1200);
                clearInterval(intervalId);
            }
        }, 200);
        return () => clearInterval(intervalId);
    }, [stringIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(new Date());
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="group flex flex-col w-[90%] h-full justify-between mt-12 mb-5 border rounded-lg bg-gradient-to-br backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 md:h-full md:w-full lg:h-full lg:w-full md:mt-0 md:mb-0 lg:mt-0 lg:mb-0">
            <div>
                <div className="flex items-center justify-between mt-3 ml-4">
                    <img
                        className="h-20 w-20 rounded-full"
                        src="https://i.ibb.co/MDp0xC2H/profile.jpg"
                        alt="Profile"
                    />
                    <div className="flex flex-col ml-4 dark:text-white text-black">
                        <a className="font-bold text-lg">Dhanush H S</a>
                        <a className="text-slate-500 dark:text-gray-400 cursor-pointer" onClick={() => { window.open("https://www.github.com/foskey51") }}>@foskey51</a>
                    </div>
                    {/*DarkMode Toggle*/}
                    <div onClick={toggleDarkMode} className="cursor-pointer ml-auto mr-6 px-2 border-2 dark:text-white text-black rounded-lg border-gray-300 hover:border-amber-400 hover:shadow-[0_0_10px_2px_rgba(255,191,0,0.6)] transition-all duration-300">
                        <button onClick={toggleDarkMode}>{darkMode ? "0" : "1"}</button>
                    </div>
                </div>
                <div className="mt-4 ml-6 text-black dark:text-white">
                    <a className="dark:text-gray-400 text-gray-600">
                        Hey 👋, I'm a
                    </a>
                    <a className="dark:text-white text-black"> Developer</a>
                    <div className="pt-2">
                        <a className="font">I work on </a>
                        <a className="font-mono font-bold">{"\""}{text}{"\""}</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end space-y-1 mb-2 mr-4 mt-5 md:mt-0">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-2 bg-green-600 rounded-full"></div>
                    <a className="dark:text-slate-300 text-gray-400 text-[0.80rem]">Available For Work</a>
                </div>
                <a className="dark:text-slate-300 text-gray-400 text-[0.80rem] tracking-wide">
                    {timer.toDateString()}&nbsp;&nbsp;&nbsp;&nbsp;{timer.toLocaleTimeString().toUpperCase()}
                </a>
            </div>
        </div >
    );
};

export default HeaderCard;