import { useEffect, useState } from "react";

const HeaderCard = () => {
    const [text, setText] = useState('');
    const [timer, setTimer] = useState(new Date());
    const strings = ['Backend', 'System Designs', 'WebApp', 'DevOps'];
    const [stringIndex, setStringIndex] = useState(0);
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

    return (
        <div className="flex flex-col w-[90%] mt-12 mb-5 border rounded-lg bg-gradient-to-br backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 md:h-full lg:h-full md:w-full md:mt-0 md:mb-0 lg:mt-0 lg:mb-0  lg:w-full">
            <div className="flex items-center mt-3 ml-4">
                <img
                    className="h-20 w-20 rounded-full"
                    src="https://avatars.githubusercontent.com/u/170395811?s=400&u=aa99d7995bf646383fe1adfcc7d537b2aedcdf4c&v=4"
                    alt="Profile"
                />
                <div className="flex flex-col ml-4 dark:text-white text-black">
                    <a className="font-bold text-lg">Dhanush H S</a>
                    <a className="text-slate-500 dark:text-gray-400" onClick={() => { window.open("https://www.github.com/foskey51") }}>@foskey51</a>
                </div>
            </div>
            <div className="mt-4 ml-6 text-black dark:text-white">
                <a className="dark:text-gray-400 text-gray-600">
                    Hey 👋, I'm a
                </a>
                <a className="dark:text-white text-black"> Developer</a>
                <div className="pt-2">
                    <a className="font">I work on </a>
                    <a className="font-mono font-extrabold">{"\""}{text}{"\""}</a>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-7 ml-auto mr-4">
                <div className="w-3 h-2 bg-green-600 rounded-full"></div>
                <a className="dark:text-slate-300 text-gray-400 text-[0.80rem]">Available For Work</a>
            </div>
            <a className="dark:text-slate-300 text-gray-400 text-[0.80rem] pt-1 pb-2 ml-auto mr-4 tracking-wide">{timer.toDateString()}&nbsp;&nbsp;&nbsp;&nbsp;{timer.toLocaleTimeString().toUpperCase()}</a>
        </div>
    );
};

export default HeaderCard;