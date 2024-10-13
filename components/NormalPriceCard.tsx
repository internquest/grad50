import Image, { StaticImageData } from "next/image";
import React from "react";
import pricing from "@/public/price.svg";
import pricing2 from "@/public/pricing2.svg";
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
  buttonText?: string;
};

const NormalPricingCard = (props: Props) => {
  return (
    <div className="undefined h- w-fit cursor-pointer group/items    relative  ">
      <div
        className={twMerge(
          `w-[240px]  lg:w-[344px] h-full  border-2 bg-white rounded-[20px] border-primary-brown     flex justify-center items-center relative z-10 `,
          props.className
        )}
      >
        <div className="flex h-full w-full bg-image-square flex-col items-center justify-center gap-4 px-7 py-7 font-primaryMedium   md:items-start lg:py-11 lg:pl-11 lg:pr-6">
          <div className="text-medium font-medium  font-generalsans-m font-text-primary-brown  text-lg md:text-2xl leading-[70px]  ">
           <h1 className="leading-[50px]"> 
             {props.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full rounded-[20px] bg-primary-brown animate-circleFill -z-10  opacity-100   top-[7px] left-[5px]    absolute  "></div>
    </div>
  );
};

export default NormalPricingCard;
