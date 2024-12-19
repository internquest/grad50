'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'

const Heromain = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [areaRatio, setAreaRatio] = useState<number>(0); // State to hold the area ratio
    const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);

    const windowwidth = useWindowSize().width;
    // console.log(windowwidth);


    useEffect(() => {
        const widthElement = ref.current;
        if (widthElement) {
            const offsetWidth = widthElement.offsetWidth;
            const offsetHeight = widthElement.offsetHeight;
            const refArea = offsetWidth * offsetHeight; // Area of the ref element

            // Calculate the area of the specified box

            const boxWidth: number = windowwidth !== null
                ? (windowwidth >= 1610 ? 74 : windowwidth >= 1024 ? 64 : windowwidth >= 640 ? 54 : 44)
                : 44;
            const boxHeight: number = windowwidth !== null
                ? (windowwidth >= 1610 ? 74 : windowwidth >= 1024 ? 64 : windowwidth >= 640 ? 54 : 44) : 44; // Height in pixels (adjust based on your responsive design)
            const boxArea = boxWidth * boxHeight; // Area of the box

            // Calculate the area ratio
            const ratio = refArea / boxArea;
            setAreaRatio(Math.floor(ratio)); // Set the area ratio in state
            // Select five random boxes
            // const totalBoxes = Math.floor(ratio);

        }
    }, [windowwidth]);


    useEffect(() => {
        // console.log('shiva');

        const indices = Array.from({ length: areaRatio }, (_, index) => index); // Create an array of indices
        const key = setInterval(() => {

            const shuffledIndices = indices.sort(() => Math.random() - 0.5); // Shuffle the indices
            const randomSelection = shuffledIndices.slice(0, 5); // Select the first five indices
            setSelectedBoxes(randomSelection); // Update state with selected boxes
        }, 1000);
        return () => clearTimeout(key); // Clear the timeout when the component unmounts
    }, [areaRatio]);
    // console.log(areaRatio, selectedBoxes);
    // console.log('shiva');


    return (
        <div ref={ref} className='relative mt-2 lg:mt-0  overflow-hidden'>
            <div className="absolute z-0 h-full w-[110dvw]">
                <div className="h-[80%] w-full overflow-hidden">
                    <div className="flex flex-wrap !gap-0">
                        {[...Array(Math.floor(areaRatio))].map((_, index) => (

                            <div key={index} className="flex-center h-[44px] w-[44px] border-[.5px] border-[#eaeaea] sm:h-[54px] sm:w-[54px] lg:h-[64px] lg:w-[64px] xl4:h-[74px] xl4:w-[74px]">


                                <div className={`${selectedBoxes.includes(index) ? 'block' : 'hidden'}   h-full w-full bg-[#EBFAE2]`}></div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <div className="relative md:pt-36 pb-10 lg:py-20 py-3 z-10">
                <h1 className='text-[#FB9D46] font-bold text-[48px] font-cabiet-r tracking-[.02em] leading-[1.2] mx-auto text-center'>Hey there, future tech superstar! 👋</h1>
                <p className='text-[24px] tracking-[.5px] leading-[2] font-generalsans-m px-3 text-center mx-auto mt-6 text-[#462B34] max-w-[606px]'>Want to see what companies are actually paying
                    top dollars for ?</p>
            </div>
        </div>
    )
}

export default Heromain
