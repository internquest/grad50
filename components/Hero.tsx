'use client'
import React, { useState, useEffect } from "react";
import PromiseComponent from '@/components/PromiseComponent';
import PricingCard from '@/components/PricingCard';
import pricesvg from '@/public/priceingsvg.svg';
import Image from 'next/image';
import pricing from '@/public/price.svg';
import arrow from "@/public/navbar-hyting.svg";
import circle from "@/public/circle-hyring.svg";
import buttonarrow from "@/public/buttonarrow.svg";
import heroimage from "@/public/heroimage.svg";
import img1 from "@/public/1.svg";
import img2 from "@/public/2.svg";
import img3 from "@/public/3.svg";
import img4 from "@/public/4.svg";
import img5 from "@/public/5.svg";
import img6 from "@/public/6.svg";
import img7 from "@/public/7.svg";
import img8 from "@/public/8.svg";
import img9 from "@/public/9.svg";
import img11 from "@/public/11.svg";
import img12 from "@/public/12.svg";
import img13 from "@/public/13.svg";
import img14 from "@/public/14.svg";
import img15 from "@/public/15.svg";

import spnner from "@/public/spin.svg";
import spnewnner from "@/public/new.svg";
import greenstart from "@/public/greendothero.svg";
import Marquee from "react-fast-marquee";
import MainMarquee from "./MainMarquee";
import PromiseMainComponent from "./PromiseMainComponent";
import Heromain from "./Heromain";
type Props = {};
let marqueeItems = [
  { image: img1, name: "System Designer" },
  { image: img2, name: "Full Stack Engineer" },
  { image: img3, name: "Front-End Engineer" },
  { image: img4, name: "Back-End Engineer" },
  { image: img5, name: "Data Engineer" },
  { image: img6, name: "Social Media Marketer" },
  { image: img7, name: "DevOps" },
  { image: img13, name: "Mobile Engineer" },
  { image: img12, name: "UI/UX Engineer" },
];
const Hero = (props: Props) => {

  return (
    <div className="  max-w-[100vw] w-full  z-0 ">
      {/* <Heromain /> */}
      <div className="w-[100vw]  mt-3 md:mt-14 ">
        <div className="mx-auto  mb-3 md:mb-20 w-full ">
          <div className="mx-auto my-0 flex pl-6 pr-3 md:pr-0 lg:pl-[60px] xl:pl-[80px] gap-8 max-w-[1800px] flex-col md:flex-row">
            <div className="w-full md:w-[45%] flex justify-start items-center flex-col mt-6 ">
              <div className="">
                <h1 className=" text-primary-brown  max-w-[401px] font-cabiet-b text-4xl  text-start  w-full lg:text-[48px] !leading-[1.7]  pt-6 tracking-[-.01em]">
                  Meet the new<p className="relative mx-2 inline-block lg:mx-3">
                    <span className="absolute -left-[4px] inset-0 top-3 scale-[1.2] md:left-[3px] md:top-4 lg:left-[5px] lg:top-6 md:scale-[1.3] lg:scale-[1.5]  ">
                      <Image
                        src={circle}
                        width={100}
                        className="w-fit h-fit"
                        height={100}
                        alt={"image"}
                      />
                    </span>
                    gold
                  </p>
                  <br className="hidden lg:block" />
                  standard in
                  <span className="text-secondary-orange"> new <br />
                    grad opportunities</span>
                </h1>
                <div className="mb-8  mt-[16px] max-w-[490px] font-generalsans-m text-xl  font-normal lg:mb-[60px]  text-start lg:text-2xl text-[#462B34D9] !leading-[2.1]">
                  Facilitating meaningful connection between
                  exceptional student talent and dream
                  opportunities in tech
                </div>

              </div>
            </div>

            {/* leaving the space to put the animation down */}
            <div className=" bg-green  flex w-full md:w-[55%] items-center self-end  justify-center  ">
              <div className="relative w-full ">
                <div className="h-full w-full">
                  <div
                    title=""
                    role="button"
                    aria-label="animation"
                    tabIndex={0}
                    style={{

                      overflow: "hidden",
                      margin: "0px auto",
                      outline: "none",
                    }}
                    className=" flex justify-center md:block"
                  >
                    {/* <div className="  w-full h-full"> */}
                    <Image
                      src='https://ik.imagekit.io/ysp4xwrz9/g50/Group%2018-min.svg'
                      className=" md:hidden "
                      width={450}
                      height={450}
                      alt="image"
                    />
                    <Image
                      src='https://ik.imagekit.io/ysp4xwrz9/g50/Group%2018-min.svg'
                      className="hidden md:block lg:hidden"
                      width={450}
                      height={450}
                      alt="image"
                    />
                    <Image
                      src='https://ik.imagekit.io/ysp4xwrz9/g50/Group%2018-min.svg'
                      className="hidden lg:block xl:hidden"
                      width={500}
                      height={500}
                      alt="image"
                    />
                    <Image
                      src='https://ik.imagekit.io/ysp4xwrz9/g50/Group%2018-min.svg'
                      className="hidden xl:block"
                      width={600}
                      height={600}
                      alt="image"
                    />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* below animation section */}
            {/* <div className=" lg:hidden flex justify-center my-4 lg:max-w-[650px] xl:max-w-[860px] 2xl:max-w-[860px]">
              <div className="sm:grid  sm:grid-cols-2 items-start  ">
                <div className="">
                  <div
                    className="font-generalsans-m undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={100}
                        className="w-fit h-fit"
                        height={100}
                        alt={"image"}
                      />
                    </div>
                    <div className="">AI-Powered Hyring App </div>
                  </div>
                  <div
                    className="font-generalsans-m undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={100}
                        className="w-fit h-fit"
                        height={100}
                        alt={"image"}
                      />
                    </div>
                    <div className="">Salaries up to ₹1 Crore </div>
                  </div>
                  <div
                    className="font-generalsans-m undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={100}
                        className="w-fit h-fit"
                        height={100}
                        alt={"image"}
                      />
                    </div>
                    <div className="">
                      Health Insurance for the Entire Family{" "}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div
                    className="font-generalsans-m undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={100}
                        className="w-fit h-fit"
                        height={100}
                        alt={"image"}
                      />
                    </div>
                    <div className="">
                      Transparent Salary Info. - No Hanky-Panky
                    </div>
                  </div>
                  <div
                    className="font-generalsans-m undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={100}
                        className="w-fit h-fit"
                        height={100}
                        alt={"image"}
                      />
                    </div>
                    <div className="">Indian Taxation & Compliance Covered </div>
                  </div>
                  <div
                    className="font-generalsans-m undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={100}
                        className="w-fit h-fit"
                        height={100}
                        alt={"image"}
                      />
                    </div>
                    <div className="">
                      Cool Office Spaces Located Across India
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>


        {/* <div className="w-screen">
        <div className="mx-auto h-[71px] min-w-full  -rotate-3 border border-primary-brown bg-primary-brown ">
          <div
          className="py-4 overflow-hidden flex flex-row relative w-full 
        "
          >
            <Marquee>
              <div className="flex flex-row min-w-full flex-grow-0 shrink-0 basis-auto">
                
                {marqueeItems.map((item: any, key: any) => {
                  return (
                    <div className="font-lg overflow-hidden mx-3 flex w-fit items-center gap-2 font-WhyteInktrap-regular font-normal text-white ">
                      <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="image"
                      className="w-fit object-contain h-fit"
                      />
                      <span className="">{item.name}</span>
                    </div>
                  );
                })}
                </div>
            </Marquee>
          </div>
        </div>
      </div>  */}
        <MainMarquee />
      </div>
      <PromiseMainComponent />


      <div className=" select-none scale-[1.4] xs:scale-[1.4] sm:scale-[1.25] md:scale-[1.1]  h-[70vh] !cursor-default">
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
                <g style={{ display: 'block' }} transform="matrix(1,0,0,1,762.9990234375,171.49899291992188)" opacity="1"><image width="73px" height="165px" preserveAspectRatio="xMidYMid slice" xlinkHref="./lotterhandle.png"></image></g>
                <g style={{ display: 'block' }} transform='matrix(1,0,0,1,-0.25,130.75900268554688)' opacity="1"><image width="781px" height="449px" preserveAspectRatio="xMidYMid slice" xlinkHref='./bg-lottie.png'></image></g>
                <g className="ai" clipPath="url(#__lottie_element_163)" style={{ display: 'block' }} transform="matrix(1,0,0,1,96,225.5)" opacity="1">
                  <g className="ai animate-number-scale" style={{ display: 'block' }} transform="matrix(1,0,0,1,4,-1032)" opacity="1">
                    <image width="108px" height="1456px" preserveAspectRatio="xMidYMid slice" href="./numbersscale.png"></image>
                  </g>
                </g>
                <g className="ai" clip-path="url(#__lottie_element_156)" style={{ display: 'block' }} transform="matrix(1,0,0,1,308,225.5)" opacity="1">
                  <g className="ai animate-number-scale" style={{ display: 'block' }} transform="matrix(1,0,0,1,4,-1032)" opacity="1">
                    <image width="108px" height="1456px" preserveAspectRatio="xMidYMid slice" href="./numbersscale.png"></image>
                  </g>
                </g>
                <g className="ai" clip-path="url(#__lottie_element_149)" style={{ display: 'block' }} transform="matrix(1,0,0,1,524,225.5)" opacity="1">
                  <g className="ai animate-number-scale" style={{ display: 'block' }} transform="matrix(1,0,0,1,4,-1032)" opacity="1">
                    <image width="108px" height="1456px" preserveAspectRatio="xMidYMid slice" href="./numbersscale.png"></image>
                  </g>
                </g>
              </g>

            </g>
          </svg>
        </div>
      </div>

    </div>
  );
};

export default Hero;
