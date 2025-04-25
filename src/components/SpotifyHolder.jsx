const SpotifyHolder = () => {
    const URL = "https://open.spotify.com/embed/playlist/5VuRwmFpohtxhbvcQeJDoa?utm_source=generator";
    return (
        <>
            {/* Shown only on md and above */}
            <div className="hidden md:flex h-full w-full border rounded-lg bg-gradient-to-bl backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black overflow-auto hide-scrollbar">
                <iframe
                    src={URL}
                    width="100%"
                    height="1024"
                    loading="lazy"
                ></iframe>
            </div>

            {/* Shown only on small screens */}
            <div className="md:hidden flex w-[90%] h-full mb-5 border rounded-lg bg-gradient-to-bl backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black overflow-auto">
                <iframe
                    src={URL}
                    width="100%"
                    height="352"
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
};

export default SpotifyHolder;