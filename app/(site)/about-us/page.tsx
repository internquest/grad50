"use client";
import React from "react";
import Image from "next/image";
import animatesvg from "@/public/animasvgabout.svg";

import circle from "@/public/circle-hyring.svg";
import Link from "next/link";
import ChallengeBox from "@/components/ChallengeBox";
import HyringBox from "@/components/HyringBox";
import SpinComponent from "@/components/SpinComponent";
import OurmissionAbout from "@/components/OurmissionAbout";
import ExclusiveMembetAbout from "@/components/ExclusiveMembetAbout";
import Tickanimation from "@/components/Tickanimation";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full h-full  text-primary-brown relative flex flex-col gap-10   ">
      <div className="mx-auto px-1 md:px-5 flex flex-col gap-20 my-0 w-full max-w-[1800px]">
        <div className="flex flex-col items-center gap-5">
          <div className=" mt-10 text-center font-cabiet-r  font-[700] text-[40px]  lg:mt-[40px] lg:text-[58px]  ">
            Introducing
            <p className="relative w-fit mx-2 px-4 inline-block lg:mx-3">
              <span className="absolute w-fit   -left-[2px] -top-4 scale-[0.9] lg:-left-1 lg:-top-3 lg:scale-[1]  ">
                <Image
                  src={circle}
                  width={1500 / 2}
                  className="h-fit  object-cover"
                  height={1100 / 2}
                  alt={"image"}
                />
              </span>
              Grad50
            </p>
          </div>
          <p className="  text-center font-generalsans-r leading-[40px] lg:leading-[62px] w-full  md:w-3/5 text-2xl  lg:font-normal">
            Grad50 is creating a new path for students aiming for top 0.01%
            opportunities
          </p>
          <p className="  text-center font-generalsans-r  text-[20px] leading-[40px] lg:leading-[62px] font-[500] w-full md:w-3/5 lg:text-[28px] lg:font-normal ">
            Have you ever dreamt of landing those dream opportunities that make
            headlines? You know, the ones where an IIT or NIT student bags a
            whopping{" "}
            <span className="font-semibold font-generalsans-b">₹1 CR</span>{" "}
            package or secures{" "}
            <span className="font-semibold font-generalsans-b">₹50 LPA</span>{' '}
            job straight out of college?
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full h-full relative justify-center ">
          <div className="mx-auto  sm:px-10">
            <ChallengeBox />
          </div>
          <div className="my-5 mx-auto flex flex-col w-full justify-center items-center px-5">
            {/* <HyringBox /> */}
            <h1 className="font-cabiet-black text-[33px] md:text-[40px] text-[#462B3480]">
              And so, we started
            </h1>
            <h1 className="text-[#EAA24BCC] font-cabiet-black text-[100px] md:text-[140px] lg:text-[250px]">
              Grad50
            </h1>
          </div>
          <div className="w-full flex  md:px-6 items-center justify-center">
            <OurmissionAbout
              text="Our mission at Grad50 is simple yet ambitious – to level the playing field 
and democratize access to high-paying dream job opportunities for 
graduates by helping them explore top 0.01% elite opportunities at
startups creating a new future "
              className="max-w-[1150px] w-full bg-[#B6ECCC] md:px-14 text-center text-2xl lg:text-[30px] font-generalsans-m   h-fit rounded-[50px] leading-[40px] lg:leading-[60px] "
            />
          </div>
          <div className="w-full flex items-center my-10 justify-center">
            <p className="  text-center font-generalsans-r text-xl mx-4  md:text-2xl leading-[40px] md:leading-[62px] font-[500] md:w-3/5 lg:text-[28px] lg:font-normal ">
              Our platform aims to bridge the gap between talented graduates and
              top-tier startups offering premium roles with competitive
              compensation packages.
            </p>
          </div>
          {/* <div className="px-5 md:px-10 aos-init aos-animate">
            <SpinComponent />
          </div> */}
        </div>
      </div>
      <div className="z-20   flex min-h-[500px] w-full  flex-col justify-center flex-wrap font-primary lg:flex-row md:flex-nowrap">
        <div className="w-full lg:w-1/2 bg-[#462B34] flex items-center">
          <div className="flex min-h-[250px] flex-1 flex-col max-w-[640px] mx-auto items-start   p-5 text-[#FAFAFA]  md:p-14 justify-center">

            <p className="mb-5 text-left  font-cabiet-black text-[#EAA24B] md:text-left text-2xl md:text-4xl lg:text-5xl   ">
              The Grad50 difference
            </p>
            <p className="text-md md:text-lg lg:text-lg xl:text-xl">
              <span className=" h-full !leading-[2] text-white/[.9] font-generalsans-m md:text-[20px]">
                Grad50 is here to transform the landscape of dream opportunities
                in tech for students by providing them access to exclusive 0.01%
                roles that offer competitive compensation packages, starting from
                ₹50 LPA and beyond.
              </span>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#361C24] flex items-center">
          <div className="flex flex-1 mx-auto bg-[#361C24] p-5 max-w-[640px]  items-center justify-start xl:justify-center text-[#FAFAFA] md:p-14">
            {/* <div className="tick_svg_dynamic_height mt-2 flex h-[330px] w-[42px] md:w-[50px]">
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
            >
              <Image
                src={animatesvg}
                width={100}
                height={100}
                className="w-fit h-full object-contain"
                alt="image"
              />
            </div>
          </div> */}

            <Tickanimation />



          </div>
        </div>
      </div>

      <div className="w-full px-1 sm:px-10  h-full">
        <div className="max-w-[1330px] mx-auto">

          <ExclusiveMembetAbout />
        </div>
      </div>
    </div>
  );
};

export default page;
