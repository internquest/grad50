import React from 'react'
import { marqCards } from './Stickycard'


interface marindiv {
    text: string;
    bgcolor: string;
    fillcolor: string;
    index: number;
}

const Marqindiv = ({ text, bgcolor, fillcolor, index }: marindiv) => {
    return (
        <div>
            <div className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] w-[fit-content] pb-2 pt-2 m-0 p-0">
                <div className="relative  h-[71px] w-fit cursor-pointer -ml-[55px]  scale-[0.65] sm:-ml-0 sm:scale-[0.8] ">
                    <div className="box-border z-[1] bg-white  border-[solid] border-primary-brown relative flex h-[64px] items-center justify-center rounded-[12px] border-2 m-0 p-0">
                        <p className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-[25px] pr-[25px] font-generalsans-m text-[1rem] leading-6 p-0">{text}</p>
                        <div className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] absolute -left-[20px] -top-[20px] m-0 p-0">
                            <div className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] relative m-0 p-0">
                                <svg width="40" height="42" fill="#B9C8FF"
                                    xmlns="http://www.w3.org/2000/svg" className={`box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle animate-[5s_linear_0s_infinite_normal_none_running_spin]  ${fillcolor} m-0 p-0`}>
                                    <path d="m20.273 1.616 3.969 5.873.252.375.425-.155 6.663-2.419-.242 7.084-.016.452.435.125 6.812 1.958-4.36 5.59-.278.356.278.356 4.36 5.589-6.812 1.959-.435.125.016.451.242 7.084L24.919 34l-.425-.153-.252.374-3.969 5.873-3.968-5.873-.253-.374-.424.154-6.663 2.42.242-7.085.016-.451-.435-.125-6.812-1.96 4.36-5.588.278-.356-.278-.357-4.36-5.589 6.812-1.958.435-.125-.016-.452-.242-7.084 6.663 2.42.424.154.253-.375 3.968-5.873Z" stroke="#462B34" stroke-width="1.158" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                </svg>
                                <div className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] absolute left-[15px] top-[22%] font-generalsans-m m-0 p-0">{index + 1}</div>
                            </div>
                        </div>
                    </div>
                    <div className={`box-border ${bgcolor}   border-[solid] border-primary-brown absolute h-[64px] w-full rounded-[12px] border-2 m-0 p-0 left-[7px] top-[7px]`}></div>
                </div>
            </div>
        </div>
    )
}

export default Marqindiv
