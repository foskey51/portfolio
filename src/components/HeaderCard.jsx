import { useEffect, useState } from "react";

const HeaderCard = () => {
    const [text, setText] = useState('');
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

    return (
        <div className="flex flex-col h-[28vh] w-[90vw] mt-12 border rounded-lg bg-gradient-to-br backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400">
            <div className="flex items-center mt-3 ml-4">
                <img
                    className="h-20 w-20 rounded-full"
                    src="https://avatars.githubusercontent.com/u/170395811?s=400&u=aa99d7995bf646383fe1adfcc7d537b2aedcdf4c&v=4"
                    alt="Profile"
                />
                <div className="flex flex-col ml-4 dark:text-white text-black">
                    <a className="font-bold text-lg">Dhanush H S</a>
                    <a className="text-gray-600 dark:text-gray-400" onClick={() => { window.open("https://www.github.com/foskey51") }}>@foskey51</a>
                </div>
            </div>
            <div className="mt-4 ml-6 text-black dark:text-white">
                <a className="dark:text-slate-300 text-gray-400">
                    Hey 👋, I'm a developer <br />
                </a>
                <div className="pt-2">
                    <a className="font">I work on </a>
                    <a className="font-mono font-extrabold">{"\""}{text}{"\""}</a>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-6 ml-auto mr-10">
                <div class="w-3 h-2 bg-green-600 rounded-full"></div>
                <a className="dark:text-slate-300 text-gray-400 text-[0.80rem] tracking-wider">Available For Work</a>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-6 ml-auto mr-10">
            </div>
        </div>
    );
};

export default HeaderCard;