import React, { useState } from 'react';

const ImageHolder = () => {
    const images = {
        images: [
            "https://iili.io/FEeUn9e.jpg",
            "https://iili.io/FEeUxwb.jpg",
            "https://iili.io/FEeUBS9.jpg",
            "https://iili.io/FEeUztj.jpg"
        ]
    };

    const seedArray = new Uint32Array(1);
    window.crypto.getRandomValues(seedArray);
    const seed = seedArray[0];
    const randomIndex = seed % images.images.length;
    const randomPic = images.images[randomIndex];

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="flex w-[90%] h-[100%] md:w-full md:h-full border rounded-lg bg-gradient-to-bl backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black mb-6 md:mb-0">
            <div className="relative w-full h-full">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <a className='font-mono text-black dark:text-white'>Loading...</a>
                    </div>
                )}
                <img
                    className={`h-full w-full object-fill transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    src={randomPic}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    alt="Random"
                />
            </div>
        </div>
    );
};

export default ImageHolder;