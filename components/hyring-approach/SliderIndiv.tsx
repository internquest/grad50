import React from 'react'

import { slidercard } from './Stickycard'

const SliderIndiv = ({ title, desc, image, bgcolor }: slidercard) => {
    return (
        <div className="h-[238px]  w-fit  cursor-pointer m-auto  relative  ">
            <div className={`h-[230px] w-[310px]   xxs:w-[325px] xs:w-[380px] sm:w-[480px] md:!w-[580px] lg:!w-[700px] xl:!w-[950px] border-2 ${bgcolor}  rounded-[16px] border-primary-brown flex justify items-center relative z-[1] `}>
                <div className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex w-full items-center justify-between gap-4 p-5 m-0">
                    <div className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] [flex-basis:80%] m-0 p-0">
                        <div className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] relative flex m-0 p-0">
                            <svg width="44" height="44" fill="#B9C8FF"
                                xmlns="http://www.w3.org/2000/svg" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle translate-x-[var(--tw-translate-x)] translate-y-[var(--tw-translate-y)] rotate-[var(--tw-rotate)] skew-x-[var(--tw-skew-x)] skew-y-[var(--tw-skew-y)] scale-x-[var(--tw-scale-x)] scale-y-[var(--tw-scale-y)] fill-[rgb(255,_245,_183)] m-0 p-0">
                                <path d="M28.72 28.485a26.459 26.459 0 0 0-6.465 11.232 26.698 26.698 0 0 0-6.849-10.995A25.858 25.858 0 0 0 4.2 22.25a26.457 26.457 0 0 0 10.97-6.848 26.458 26.458 0 0 0 6.462-11.218c1.293 4.042 3.56 7.856 6.86 10.988 3.292 3.126 7.154 5.287 11.23 6.454a26.459 26.459 0 0 0-11 6.858Z" stroke="#462B34" stroke-width="1.691" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            </svg>
                            <svg width="26" height="26" fill="#FFF5B7"
                                xmlns="http://www.w3.org/2000/svg" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle translate-x-[var(--tw-translate-x)] translate-y-[var(--tw-translate-y)] rotate-[var(--tw-rotate)] skew-x-[var(--tw-skew-x)] skew-y-[var(--tw-skew-y)] scale-x-[var(--tw-scale-x)] scale-y-[var(--tw-scale-y)] fill-[rgb(252,_178,_178)] m-0 p-0 -mt-6 ml-6">
                                <path d="M16.758 16.63a16.017 16.017 0 0 0-3.6 5.814 16.132 16.132 0 0 0-3.796-5.682 15.618 15.618 0 0 0-5.797-3.606A16.018 16.018 0 0 0 9.23 9.361a16.015 16.015 0 0 0 3.597-5.803 15.683 15.683 0 0 0 3.807 5.678 16.486 16.486 0 0 0 5.814 3.588 16.017 16.017 0 0 0-5.689 3.806Z" stroke="#462B34" stroke-width="1.691" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            </svg>
                        </div>
                        <div className="text-xl xs:text-2xl font-generalsans-m lg:text-3xl mt-3 
">{title}</div>
                        <div className='text-xs  xs:text-base  md:text-lg font-generalsans-r mt-3 '>{desc}</div>
                    </div>
                    <div className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] [flex-basis:40%] m-0 p-0">
                        <div className="relative flex items-center  justify-center scale-[0.35] sm:scale-[0.45] lg:scale-[0.6]">
                            <svg width="283" height="265" fill="none"
                                xmlns="http://www.w3.org/2000/svg" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle absolute z-10 m-0 p-0">
                                <g opacity="0.2" stroke="#462B34" stroke-width="0.5" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                                    <path d="M38.852 0v264.563M79.555 0v264.563M120.258 0v264.563M160.957 0v264.563M201.656 0v264.563M18.5 0v264.563M59.2 0v264.563M99.902 0v264.563M140.605 0v264.563M181.309 0v264.563M222.008 0v264.563M242.359 0v264.563M262.711 0v264.563M282.137 13.876H-.002M282.137 54.578H-.002M282.137 95.28H-.002M282.137 135.981H-.002M282.137 176.683H-.002M282.137 217.385H-.002M282.137 258.087H-.002M282.137 34.226H-.002M282.137 74.928H-.002M282.137 115.631H-.002M282.137 156.333H-.002M282.137 197.035H-.002M282.137 237.736H-.002" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                </g>
                            </svg>
                            <div dangerouslySetInnerHTML={{ __html: image }} className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] absolute z-20 m-0 p-0">

                            </div>
                            <svg width="44" height="44" fill="#B9C8FF"
                                xmlns="http://www.w3.org/2000/svg" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle absolute -left-16 top-24 z-30 animate-[3s_ease-in-out_0s_infinite_normal_none_running_scaleIn] fill-[rgb(255,_198,_130)] m-0 p-0">
                                <path d="M28.72 28.485a26.459 26.459 0 0 0-6.465 11.232 26.698 26.698 0 0 0-6.849-10.995A25.858 25.858 0 0 0 4.2 22.25a26.457 26.457 0 0 0 10.97-6.848 26.458 26.458 0 0 0 6.462-11.218c1.293 4.042 3.56 7.856 6.86 10.988 3.292 3.126 7.154 5.287 11.23 6.454a26.459 26.459 0 0 0-11 6.858Z" stroke="#462B34" stroke-width="1.691" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            </svg>
                            <svg width="44" height="44" fill="#B9C8FF"
                                xmlns="http://www.w3.org/2000/svg" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle absolute -right-10 -top-[130px] z-30 animate-[3s_ease-in-out_0s_infinite_reverse_none_running_scaleOut] fill-[rgb(97,_227,_150)] m-0 p-0">
                                <path d="M28.72 28.485a26.459 26.459 0 0 0-6.465 11.232 26.698 26.698 0 0 0-6.849-10.995A25.858 25.858 0 0 0 4.2 22.25a26.457 26.457 0 0 0 10.97-6.848 26.458 26.458 0 0 0 6.462-11.218c1.293 4.042 3.56 7.856 6.86 10.988 3.292 3.126 7.154 5.287 11.23 6.454a26.459 26.459 0 0 0-11 6.858Z" stroke="#462B34" stroke-width="1.691" className="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[230px] w-full rounded-[16px] bg-primary-brown absolute " style={{ left: '5px', top: '7px' }}></div>
        </div>
    )
}

export default SliderIndiv
