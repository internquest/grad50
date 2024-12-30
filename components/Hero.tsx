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
import Lottery from "./Lottery";

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
  const cities = ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai', 'Kolkata', 'Ahmedabad', 'Delhi & NCR', 'Chandigarh', 'Kochi', 'Thiruvananthapuram']
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


      {/* lottery */}

      <Lottery />

      {/* cities */}

      <div className="relative bg-primary-brown mt-[50px]">
        <div className="absolute z-0 h-full w-full overflow-hidden">
          <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallSquareRectangles" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
                {/* <rect x="0" y="0" width="5" height="" fill="none" stroke="#4338CA" stroke-width="0.5" /> */}
                <rect x="-1" y="-1" width="2" height="2" fill="#50353E" />
                <rect x="5" y="-1" width="2" height="2" fill="#50353E" />
                <rect x="-1" y="5" width="2" height="2" fill="#50353E" />
                <rect x="5" y="5" width="2" height="2" fill="#50353E" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallSquareRectangles)" />
          </svg>
          {/* <Image alt="Background-Image" priority src="https://hyring.com/backgrounds/WhyIndiaBg.svg" fill className='absolute h-full w-full inset-0 object-cover text-transparent -z-10' /> */}
        </div>
        <div className="w-screen  relative z-[4] overflow-hidden ">
          <div className="px-5 pb-8 pt-16 text-center font-cabiet-b text-[36px] leading-[50px]  text-custom-bg-secondary  sm:text-[2.25rem]  md:py-24  md:text-[2.5rem] lg:text-[32px] ">Unlock international career pathways in global tech hubs</div>
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-[25px] pb-28 xs:px-10 md:pb-40 xl:px-3">
            {
              cities.map((city, index) =>
                <div className='group'>
                  <button className='group-hover:scale-[1.05] '>
                    <div className="h-[57px] w-fit  cursor-pointer lg:h-[65px]  relative  ">
                      <div className="w-fit h-[52px] border border-secondary-color z-[3] lg:h-[62px]  bg-white   rounded-[10px] false  relative z-1 flex items-center justify-center ">
                        <div className="flex items-center gap-2 pl-3 pr-5 xxs:pl-5 xxs:pr-7 xs:px-10 md:gap-[14px]">
                          <div className="scale-[0.7] md:scale-[1]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 30" className="h-[30px] w-full md:w-[25px] fill-secondary-color group-hover:fill-[#8f465e] group-hover:stroke-[#0e0f0c] ">
                              <path fill="fill" d="M11.022 0c.649.123 1.309.205 1.946.376 1.766.47 3.295 1.385 4.58 2.7 1.454 1.484 2.38 3.262 2.798 5.31a9.05 9.05 0 0 1-.296 4.696c-.84 2.558-2.061 4.93-3.382 7.248-1.841 3.24-3.885 6.344-6.057 9.366-.29.405-.382.405-.672 0-2.826-3.955-5.478-8.017-7.673-12.371C1.449 15.71.737 14.05.268 12.295-.2 10.546-.016 8.833.523 7.148a10.2 10.2 0 0 1 3.15-4.707A10 10 0 0 1 8.758.117c.255-.04.51-.082.764-.117zM6.603 10.406c-.005 2.042 1.622 3.709 3.637 3.72 2.05.012 3.695-1.637 3.7-3.715.007-2.048-1.644-3.726-3.66-3.732-2.02 0-3.67 1.672-3.677 3.726"></path>
                            </svg>
                          </div>
                          <div className="  font-generalsans-m text-base text-text-primary sm:text-lg lg:text-2xl">{city}</div>
                        </div>
                      </div>

                      <div className="w-full h-[52px] lg:h-[62px] group-hover:block hidden  rounded-[10px] bg-[#8f465e]   absolute  " style={{ left: '4px', top: '3px' }}></div>
                    </div>
                  </button>
                </div>
              )
            }



          </div>

        </div>
      </div>



    </div>
  );
};

export default Hero;
