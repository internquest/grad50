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
        <div className="mx-auto  mb-3 md:mb-20 w-full max-w-[92vw]">
          <div className="mx-auto my-0 flex pl-6 lg:pl-12 gap-3 max-w-[1800px] flex-col md:flex-row">
            <div className="w-full md:w-[45%] mt-6 ">
              <h1 className=" text-primary-brown   font-cabiet-b text-4xl  text-start  w-full lg:text-[44px] !leading-[1.6] xl:text-5xl 2xl:text-6xl pt-6 tracking-[-.01em]">
                Meet the new<p className="relative mx-2 inline-block lg:mx-3">
                  <span className="absolute -left-[4px] inset-0 top-3 scale-[1.2] md:left-[3px] md:top-3 lg:left-[5px] lg:top-5 md:scale-[1.3] lg:scale-[1.5]  ">
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
              <div className="mb-8  mt-5  font-generalsans-m text-xl  font-normal lg:mb-[60px]  text-start lg:text-2xl text-[#462B34D9] !leading-[2]">
                Facilitating meaningful connection between
                exceptional student talent and dream
                opportunities in tech
              </div>


            </div>

            {/* leaving the space to put the animation down */}
            <div className=" bg-green  flex w-full md:w-[55%] items-center md:pl-10 pr-4 justify-center  ">
              <div className="relative w-full ">
                <div className="h-full w-full">
                  <div
                    title=""
                    role="button"
                    aria-label="animation"
                    tabIndex={0}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      margin: "0px auto",
                      outline: "none",
                    }}
                    className=""
                  >
                    <div className="  h-[400px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] ">

                      <Image
                        src='https://ik.imagekit.io/ysp4xwrz9/g50/Group%2018-min.svg'
                        className="w-full h-full aspect-square"
                        fill={true}
                        alt="image"
                      />
                    </div>
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
    </div>
  );
};

export default Hero;
