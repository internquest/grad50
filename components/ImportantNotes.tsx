import Image, { StaticImageData } from "next/image";
import React from "react";
import pricing from "@/public/price.svg";
import pricing2 from "@/public/pricing3.svg";
import logo1 from "@/public/navbar-hyting.svg";
import square from "@/public/square.png";
import { url } from "inspector";
import smallyello from "@/public/yellow.svg";
import { twMerge } from "tailwind-merge";
import ShineButton from "./ShineButton";
type Props = {
  className?: string;
  image1?: string | StaticImageData;
  title?: string;
  price?: string;
  pricedescription?: string;
  sidebarimage?: string | StaticImageData;
  buttonText?: string
};

const ImportantNotes = (props: Props) => {
  return (
    <div className="undefined h-full w-full mx-auto items-center justify-center flex cursor-pointer  my-5  relative  ">
      <div className={twMerge(` max-w-screen-lg  w-full h-full  border-2 bg-white rounded-[20px] border-primary-brown     flex justify-center items-center relative z-10 `, props.className)}>
        <div className="flex h-full w-full bg-white rounded-[20px]  flex-col items-center justify-center gap-4 px-7 py-7 font-primaryMedium   md:items-start lg:py-11 lg:pl-11 lg:pr-6">
          {props.image1 &&
            <div className="">
              <Image
                src={props.image1 || ""}
                width={2000 / 2}
                height={3000 / 2}
                alt="iamge"
                className="w-fit h-full object-contain"
              />
            </div>
          }
          <div className="text-medium font-medium  font-WhyteInktrap-medium font-text-primary-brown  text-lg md:text-2xl lg:text-[26px] ">
            {props.title}
          </div>
          <div className="relative -left-[50px] self-start md:-left-[31px] md:scale-[1.2] lg:-left-[28px] lg:scale-[1.4]">
            <Image
              src={props.sidebarimage || pricing2}
              width={1500 / 2}
              height={700 / 2}
              alt="iamge"
              className="w-fit h-full object-contain"
            />
          </div>
          <div className="text-medium   text-center text-2xl md:text-left md:text-3xl lg:text-[40px]">

            <span className="text-base">{props.pricedescription}</span>
          </div>
          {props.buttonText &&
            <div className="md:mt-5 group/border lg:mt-[27px]  h-[47px] w-fit cursor-pointer lg:h-[65px]  relative  ">
              <ShineButton text={props.buttonText} className="group-hover:bg-white" />
            </div>
          }
        </div>

        <div className="w-full max-w-screen-lg h-full rounded-[20px] bg-primary-brown animate-circleFill -z-10 opacity-100  left-2 top-2   absolute  ">

        </div>
      </div>
    </div>
  );
};

export default ImportantNotes;
