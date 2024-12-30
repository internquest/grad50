'use client'
import React, { useEffect, useState } from 'react'

const Lottery = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);



    useEffect(() => {
        const interval = setInterval(() => {
            const lottyele = document.querySelector('#lottery')
            const lotdomele = lottyele as HTMLElement
            lotdomele.style.animationDuration = '.4s';
            lotdomele.style.transform = 'matrix(1,0,0,-1,762.9990234375,495.49899291992188)';
            setActiveIndex((prevIndex) => (prevIndex + 1));
        }, 4900)
        return () => clearInterval(interval);
    }, [])


    useEffect(() => {
        const numbers = document.querySelectorAll('.number');
        const lottyele = document.querySelector('#lottery')
        const lotdomele = lottyele as HTMLElement
        const domArray = Array.from(numbers);
        const hadnlekey = setTimeout(() => {

            lotdomele.style.transform = 'matrix(1,0,0,1,762.9990234375,171.49899291992188)';
        }, 400);
        // const animateElements = () => {
        // Initially hide all elements
        domArray.forEach((element) => {
            const htmlElement = element as HTMLElement;
            // Hide the element
            htmlElement.style.display = 'none'; // Hide the element
            htmlElement.classList.remove('animatenumber-scale'); // Remove animation
            htmlElement.style.animationDelay = '0s'; // Set animation delay
        });

        // Set timeouts to show and animate each element
        const timeouts = domArray.map((element, index) => {
            const htmlElement = element as HTMLElement;

            return setTimeout(() => {
                htmlElement.style.display = 'block'; // Show the element
                // htmlElement.style.animationDelay = `${index * 0.5}s`; // Set animation delay
                htmlElement.classList.add('animatenumber-scale'); // Start animation
            }, (index + 1.5) * 500); // Delay each element's appearance
        });
        // const lotkey=setTimeout(() => {
        //     lotdomele.style.transform = 'matrix(1,0,0,1,762.9990234375,171.49899291992188)';
        //     // lotdomele.style.animationDelay = '0s';
        //     // lotdomele.classList.add('animatenumber-scale');
        // }, 4900);

        // Cleanup function to clear all timeouts if the component unmounts
        return () => {
            clearTimeout(hadnlekey);
            timeouts.forEach((timeout) => clearTimeout(timeout));
        };
        // };

        // Run the animation initially
        // const initialTimeout = setTimeout(() => {
        //     animateElements();
        // }, 0); // Start immediately

        // // Repeat the animation every 2 seconds
        // const repeatAnimation = setInterval(() => {
        //     animateElements();
        // }, 4000); // Repeat every 2000 milliseconds (2 seconds)

        // // Cleanup function to clear the interval when the component unmounts
        // return () => {
        //     clearTimeout(initialTimeout);
        //     clearInterval(repeatAnimation);
        // };
    }, [activeIndex]);

    return (
        <div className=" select-none   h-[70vh] !cursor-default max-w-screen bg-primary-brown">
            <div role="button" aria-label="animation" tabIndex={0} style={{ width: '100%', height: '100%', overflow: 'hidden', margin: '0px auto', outline: 'none' }} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 906" width="1440" height="906" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible', }}>
                    <defs>
                        <clipPath id="__lottie_element_116"><rect width="1440" height="906" x="0" y="0"></rect></clipPath>
                        <clipPath id="__lottie_element_127"><path d="M0,0 L841,0 L841,600 L0,600z"></path></clipPath>
                        <clipPath id="__lottie_element_163"><path d="M0,0 L108,0 L108,120 L0,120z"></path></clipPath>
                        <clipPath id="__lottie_element_156"><path d="M0,0 L108,0 L108,120 L0,120z"></path></clipPath>
                        <clipPath id="__lottie_element_149"><path d="M0,0 L108,0 L108,120 L0,120z"></path></clipPath>
                    </defs>
                    <g clip-path="url(#__lottie_element_116)">
                        <g clip-path="url(#__lottie_element_127)" style={{ display: 'block', }} transform="matrix(1,0,0,1,351.5,141)" opacity="1">
                            <g style={{ display: 'block' }} transform="matrix(1,0,0,1,163.9969940185547,26.496999740600586)" opacity="1"><image width="416px" height="415px" preserveAspectRatio="xMidYMid slice" xlinkHref="./circlelotter.png"></image></g>
                            <g id='lottery' style={{ display: 'block' }} transform="matrix(1,0,0,1,762.9990234375,171.49899291992188)" opacity="1"><image width="73px" height="165px" preserveAspectRatio="xMidYMid slice" xlinkHref="./lotterhandle.png"></image></g>
                            <g style={{ display: 'block' }} transform='matrix(1,0,0,1,-0.25,130.75900268554688)' opacity="1"><image width="781px" height="449px" preserveAspectRatio="xMidYMid slice" xlinkHref='./bg-lottie.png'></image></g>
                            <g className="ai" clipPath="url(#__lottie_element_163)" style={{ display: 'block' }} transform="matrix(1,0,0,1,96,225.5)" opacity="1">
                                <g className="ai number " style={{ display: 'block' }} transform="matrix(1,0,0,1,4,-1032)" opacity="1">
                                    <image width="108px" height="1456px" preserveAspectRatio="xMidYMid slice" href="./numbersscale.png"></image>
                                </g>
                            </g>
                            <g className="ai" clip-path="url(#__lottie_element_156)" style={{ display: 'block' }} transform="matrix(1,0,0,1,308,225.5)" opacity="1">
                                <g className="ai number " style={{ display: 'block' }} transform="matrix(1,0,0,1,4,-1032)" opacity="1">
                                    <image width="108px" height="1456px" preserveAspectRatio="xMidYMid slice" href="./numbersscale.png"></image>
                                </g>
                            </g>
                            <g className="ai" clip-path="url(#__lottie_element_149)" style={{ display: 'block' }} transform="matrix(1,0,0,1,524,225.5)" opacity="1">
                                <g className="ai number " style={{ display: 'block' }} transform="matrix(1,0,0,1,4,-1032)" opacity="1">
                                    <image width="108px" height="1456px" preserveAspectRatio="xMidYMid slice" href="./numbersscale.png"></image>
                                </g>
                            </g>
                        </g>

                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Lottery
