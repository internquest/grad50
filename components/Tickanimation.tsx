'use client'
import { useInView } from 'framer-motion'
import React, { use, useRef } from 'react'

const Tickanimation = () => {
    const ref = useRef(null)
    const inview = useInView(ref, { once: true })
    return (
        <div ref={ref} className="tick_text_dynamic_height font-generalsans-m flex flex-col gap-[30px] md:gap-[42px] ">
            {
                inview &&
                <>
                    <div className="flex gap-4 relative items-center">
                        <div className="relative">
                            <svg viewBox="0 0 64 64" className="w-8 h-8">
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="30"

                                    id="circle1"
                                    className="circle"
                                />
                                <path
                                    className="check"
                                    id="check1"
                                    d="M44 24L28 40L20 32"
                                    stroke="#361C24"
                                    strokeWidth="4"
                                    fill="none"

                                />
                            </svg>

                        </div>
                        <p className="text-md md:text-[16px]  text-white/[.9] xl:text-[22px]">
                            Top 0.01% exclusive dream opportunities{" "}
                        </p>
                        <div className="h-[30px] absolute top-[100%] flex items-center justify-center left-[13px] md:h-[42px] w-[2px] ">
                            <div className=" h-[70%]  w-full">
                                <div id="line1" className="bg-[#EAA24B] line w-full "></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 relative items-center">
                        <div className="relative">
                            <svg viewBox="0 0 64 64" className="w-8 h-8">
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="30"

                                    id="circle2"
                                    className="circle"
                                />
                                <path
                                    className="check"
                                    id="check2"
                                    d="M44 24L28 40L20 32"
                                    stroke="#361C24"
                                    strokeWidth="4"
                                    fill="none"

                                />
                            </svg>
                        </div>
                        <p
                            className="text-md tick_lottie_text_opacity text-white/[.9] md:text-[16px]  xl:text-[22px]"
                        // style={{ "--d": "0s" }}
                        >
                            50 LPA starting packages{" "}
                        </p>
                        <div className="h-[30px] absolute top-[100%] flex items-center justify-center left-[13px] md:h-[42px] w-[2px] ">
                            <div className=" h-[70%]  w-full">
                                <div id="line2" className="bg-[#EAA24B] line w-full "></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 relative items-center">
                        <div className="relative">
                            <svg viewBox="0 0 64 64" className="w-8 h-8">
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="30"

                                    id="circle3"
                                    className="circle"
                                />
                                <path
                                    className="check"
                                    id="check3"
                                    d="M44 24L28 40L20 32"
                                    stroke="#361C24"
                                    strokeWidth="4"
                                    fill="none"

                                />
                            </svg>

                        </div>
                        <p
                            className="text-md tick_lottie_text_opacity text-white/[.9] md:text-[16px]  xl:text-[22px]"
                        // style={{ "--d": "1s" }}
                        >
                            Skill-based hiring challenges{" "}
                        </p>
                        <div className="h-[30px] absolute top-[100%] flex items-center justify-center left-[13px] md:h-[42px] w-[2px] ">
                            <div className=" h-[70%]  w-full">
                                <div id="line3" className="bg-[#EAA24B] line w-full "></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 relative items-center">
                        <div className="relative">
                            <svg viewBox="0 0 64 64" className="w-8 h-8">
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="30"

                                    id="circle4"
                                    className="circle"
                                />
                                <path
                                    className="check"
                                    id="check4"
                                    d="M44 24L28 40L20 32"
                                    stroke="#361C24"
                                    strokeWidth="4"
                                    fill="none"

                                />
                            </svg>

                        </div>
                        <p
                            className="text-md tick_lottie_text_opacity text-white/[.9] md:text-[16px]  xl:text-[22px]"
                        // style={{ "--d": "2s" }}
                        >
                            Referrals to FAANG & fortune 500 companies{" "}
                        </p>

                    </div>
                </>
            }

        </div>
    )
}

export default Tickanimation
