"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import bluestar from "@/public/purplestar.svg";
import yellostar from "@/public/yellostar.svg";
import greensquare from "@/public/greensquare.svg";
import image90 from "@/public/90image1.svg";
import animatesvg from "@/public/animasvgabout.svg";
import redcircle from "@/public/redcircle.svg";
import yellowtriangle from "@/public/yellowtriangle.png";
import bluesquare from "@/public/bluesquare.png";

import OurmissionAbout from "@/components/OurmissionAbout";
import ExclusiveMembetAbout from "@/components/ExclusiveMembetAbout";
import PricingCard from "@/components/PricingCard";
import NormalPricingCard from "@/components/NormalPriceCard";
import img1 from "@/public/1.svg";
import img2 from "@/public/2.svg";
import img3 from "@/public/3.svg";
import img4 from "@/public/4.svg";
import img5 from "@/public/5.svg";
import img6 from "@/public/6.svg";
import img7 from "@/public/7.svg";
import MainMarquee from "@/components/MainMarquee";
import Marquee from "react-fast-marquee";
import ImportantNotes from "@/components/ImportantNotes";
import ScholarShipCard from "@/components/ScholarShipCard";
import StarText from "@/components/StarText";
type Props = {};
let marqueeItems = [
  { image: img1, name: "System Designer" },
  { image: img2, name: "Full Stack Engineer" },
  { image: img3, name: "Front-End Engineer" },
  { image: img4, name: "Back-End Engineer" },
  { image: img5, name: "Data Engineer" },
  { image: img6, name: "Social Media Marketer" },
  { image: img7, name: "DevOps" },
  { image: img6, name: "Mobile Engineer" },
  { image: img7, name: "UI/UX Engineer" },
];

const page = (props: Props) => {
  return (
    <div className="w-full  overflow-hidden  h-full text-primary-brown relative flex flex-col gap-10   ">
      <div className="mx-auto flex flex-col gap-6 md:gap-20 my-0 w-full max-w-[1800px]">
        <div className="flex w-full justify-center flex-col items-center gap-5">
          <div className="max-w-screen-lg justify-center px-1 sm:px-3 flex flex-col items-center gap-5 w-full">

            <div className="mt-5 text-center font-cabiet-r  font-[700] text-[40px]  lg:mt-[40px] lg:text-[58px]  ">
              <h1 className="font-cabiet-b text-[40px] leading-[50px] tracking-[-1%] text-center">
                Grad50 - where extraordinary opportunities meet exceptional talent{" "}
              </h1>
            </div>
            <p className="  text-center font-generalsans-r  text-2xl leading-[40px] md:leading-[62px] font-[500] md:w-4/5 text-[#462B34CC] lg:text-[28px] lg:font-normal ">
              Embark on a journey of unparalleled opportunities being a part of
              Grad50, where we redefine what's possible for the dreamers, the
              achievers, and the top 1% students
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full h-full relative justify-center ">
          <div className="mx-auto relative w-full flex flex-col gap-10 px-4 sm:px-10">
            <div className="lg:flex-row flex-col flex max-w-[1200px] mx-auto w-full h-full gap-10 relative">
              <NormalPricingCard
                className=" max-lg:w-full"
                title="If this sounds like a page
              of your book, we invite 
              you to apply and join the
              community of top 1%
              ambitious students"
              />
              {/* <div className="flex flex-col w-full bg-white"> */}

              <div className="w-full  rounded-[9px] border-2 border-primary-brown   relative  ">
                <div className="border-3   p-2  w-full  h-full  bg-white   rounded-[9px] border-primary-brown  flex flex-col md:pl-3 lg:pl-10 relative  [&>div]:mb-3 md:mt-0 md:[&>div]:mb-5  xl:[&>div]:mb-7  z-10 ">
                  <StarText text="Shipped projects with high adoption" />
                  <StarText text="Won awards, hackathons, competitions or scholarships" />
                  <StarText text="Built communities/ large audience on social media platforms" />
                  <StarText text="Led non-profits or founded startups" />
                  <StarText text="Proven sales success in exceeding sales targets" />
                  <StarText text="An outstanding public speaker" />
                </div>

                <div className="w-full h-full lg:h-full  rounded-[9px] bg-primary-brown border-3 border-white  top-2 left-[10px] -z-10  absolute  "></div>
                {/* </div> */}
              </div>
            </div>

            {/* left marquee */}
            <div className="w-full overflow-hidden flex flex-col gap-10">
              <Marquee>
                <div className="flex w-full gap-8">
                  <div className="flex gap-3 justify-center items-center">
                    <Image
                      src={bluestar}
                      width={30}
                      height={30}
                      className="w-8 items-center  object-cover h-fit"
                      alt="iamge"
                    />
                    <p className="font-generalsans-m text-[20px] lg:text-[32px]">
                      Marketing maverick
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center items-center">
                    <Image
                      src={yellostar}
                      width={30}
                      height={30}
                      className="w-8 items-center  object-cover h-fit"
                      alt="iamge"
                    />
                    <p className="font-generalsans-m text-[20px] lg:text-[32px]">
                      Passionate Communicator
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center items-center">
                    <Image
                      src={greensquare}
                      width={30}
                      height={30}
                      className="w-8 items-center  object-cover h-fit"
                      alt="iamge"
                    />
                    <p className="font-generalsans-m text-[20px] lg:text-[32px]">
                      The Bold Storyteller
                    </p>
                  </div>
                </div>
              </Marquee>

              <div className="flex w-full space-x-3 gap-8">
                <Marquee direction="right">
                  <div className="flex gap-8 mr-3 justify-center items-center">
                    <Image
                      src={yellowtriangle}
                      width={30}
                      height={30}
                      className="w-8 items-center  object-cover h-fit"
                      alt="iamge"
                    />
                    <p className="font-generalsans-m text-[20px] lg:text-[32px]">
                      AI Pioneers
                    </p>
                  </div>
                  <div className="flex gap-3 mr-3 justify-center items-center">
                    <Image
                      src={redcircle}
                      width={30}
                      height={30}
                      className="w-8 mx-2 items-center  object-cover h-fit"
                      alt="iamge"
                    />
                    <p className="font-generalsans-m text-[20px] lg:text-[32px]">
                      Cybersecurity Guardians
                    </p>
                  </div>
                  <div className="flex gap-3 mr-3 justify-center items-center">
                    <Image
                      src={bluesquare}
                      width={30}
                      height={30}
                      className="w-8 items-center  object-cover h-fit"
                      alt="iamge"
                    />
                    <p className="font-generalsans-m text-[20px] lg:text-[32px]">
                      Tech Visionaries
                    </p>
                  </div>
                  <div className="flex gap-3 mr-3 justify-center items-center">
                    <Image
                      src={yellowtriangle}
                      width={30}
                      height={30}
                      className="w-8 items-center  object-cover h-fit"
                      alt="iamge"
                    />
                    <p className="font-generalsans-m text-[20px] lg:text-[32px]">
                      Coding Innovators
                    </p>
                  </div>
                </Marquee>
              </div>
            </div>
            {/* right marquee */}

            {/* end marquee */}
            {/* center para */}
            <div className="w-full flex items-center justify-center ">
              <h1 className="max-w-screen-md w-full text-xl text-primary-brown font-generalsans-m leading-[40px] text-center">
                Membership to our exclusive platform is by invitation only. If
                you're a driven and ambitious student aiming for the stars, we
                encourage you to apply. Once you sign up, our team will review
                your credentials & shortlisted students shall be guided with the
                membership process{" "}
              </h1>
            </div>
            {/* start pricing component kind card */}
            <div className="w-full h-full relative">
              <ImportantNotes
                pricedescription="Grad50 is dedicated to nurturing the top 1% ambitious students.  We are excited to welcome students  who are 
passionate about driving innovation and making a meaningful impact. Given the competitive nature of our community
and difficulty level of hiring challenges as a part of student placement league, we specifically encourage those with 
at least one internship experience or strong leadership skills to apply"
              />
            </div>
            {/* end start pricing */}

            {/* start subscribe */}
            <div className="w-full h-full relative flex flex-col justify-center items-center ">
              <h1 className="font-cabiet-r font-[500] text-[32px] leading-[40px] text-[#000000]">
                Subscribe to ascend the ladder of success
              </h1>
              <div className="w-full flex flex-col gap-10 md:flex-row justify-center items-center">
                <ScholarShipCard
                  buttonText="subscribe"
                  sidebarImaage={image90}
                  title="Aspire "
                  price="1200"
                />
                <ScholarShipCard
                  buttonText="subscribe"
                  sidebarImaage={image90}
                  title="Impact Icons "
                  price="120"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
