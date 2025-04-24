const SpotifyHolder = () => {
    return (
        <>
            {/* Shown only on md and above */}
            <div className="hidden md:flex h-full w-full border rounded-lg bg-gradient-to-bl backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black overflow-hidden">
                <iframe 
                    src="https://open.spotify.com/embed/playlist/7LIZYQSfWJULrtj2XOSbNy?utm_source=generator"
                    width="100%"
                    height="1024"
                    loading="lazy"
                ></iframe>
            </div>

            {/* Shown only on small screens */}
            <div className="md:hidden flex w-[90%] h-full mb-5 border rounded-lg bg-gradient-to-bl backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black overflow-hidden">
                <iframe 
                    src="https://open.spotify.com/embed/playlist/7LIZYQSfWJULrtj2XOSbNy?utm_source=generator"
                    width="100%"
                    height="352"
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
};

export default SpotifyHolder;