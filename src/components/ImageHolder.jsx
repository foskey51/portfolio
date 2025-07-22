import React, { useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const ImageHolder = () => {
    const images = {
        images: [
            "https://iili.io/FEeUn9e.jpg",
            "https://iili.io/FEeUxwb.jpg",
            "https://iili.io/FEeUBS9.jpg",
            "https://iili.io/FEeUztj.jpg"
        ]
    };

    const seed = Math.floor(Math.random() * new Date().getSeconds());
    const randomIndex = seed % images.images.length;
    const randomPic = images.images[randomIndex];

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="flex w-[90%] h-[100%] md:w-full md:h-full border rounded-lg bg-gradient-to-bl backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black mb-6 md:mb-0">
            <div className="relative w-full h-full">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ClimbingBoxLoader size={18} color='dark:white black' />
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