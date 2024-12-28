'use client'
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import pricing from "@/public/price.svg";
import pricing2 from "@/public/pricing2.svg";
import logo1 from "@/public/navbar-hyting.svg";
import square from "@/public/square.png";
import { url } from "inspector";
// import smallyello from "@/public/yellow.svg";
import { twMerge } from "tailwind-merge";
import ShineButton from "./ShineButton";
type Props = {
  className?: string;
  image1: string | StaticImageData;
  title?: string;
  price?: string;
  pricedescription?: string;
  buttonText?: string
  hover?: boolean;
  id: number;

  handlemousehover: (v: boolean) => void;
};

const PricingCard = (props: Props) => {

  return (
    <div onMouseEnter={() => props.handlemousehover(true)} className="undefined h-fit w-fit cursor-pointer group/items    relative  ">
      <div className={twMerge(`w-[240px]  lg:w-[344px] h-fit  border-2 bg-white  rounded-[20px] border-primary-brown     flex justify-center items-center relative z-10 `, props.className)}>
        <div className="flex h-full w-full  flex-col items-center justify-center gap-4 px-7 py-7 font-primaryMedium   md:items-start lg:py-11 lg:pl-11 lg:pr-6">
          <div className="">
            <Image
              src={props.image1}
              width={2000 / 2}
              height={3000 / 2}
              alt="iamge"
              className="w-fit h-full object-contain"
            />
          </div>
          <div className="text-medium font-medium  font-generalsans-m font-text-primary-brown  text-lg md:text-2xl lg:text-[26px] ">
            {props.title}
          </div>
          <div className="relative -left-[74px] md:-left-[31px] md:scale-[1.2] lg:-left-[37px] lg:scale-[1.4]">
            <Image
              src={pricing2}
              width={1500 / 2}
              height={700 / 2}
              alt="iamge"
              className="w-fit h-full object-contain"
            />
          </div>
          <div className="text-medium   text-center text-2xl md:text-left md:text-3xl lg:text-[40px]">
            ${props.price}
            <span className="text-base">{props.pricedescription}</span>
          </div>
          <div className="md:mt-5 group/border lg:mt-[27px]  h-[47px] w-fit cursor-pointer lg:h-[65px]  relative  ">
            <ShineButton text={props.buttonText} firsthover={props.hover} />
          </div>
        </div>
        {
          props.hover &&
          <div className="absolute -left-8 -top-8 scale-[.6] lg:scale-[0.9] ">

            <svg width="74" height="74" fill="#FFF5B7" xmlns="http://www.w3.org/2000/svg" className={`${props.id === 1 ? 'fill-custom-yellow' : 'fill-custom-green'} w-fit h-full animate-spin-slow object-cover`} ><path d="m47.917 13.18 8.094-8.587-3.63 11.229a31 31 0 0 0 8.233 32.095l8.588 8.095-11.229-3.63a31 31 0 0 0-32.095 8.233l-8.094 8.587 3.63-11.228a31 31 0 0 0-8.234-32.096l-8.587-8.094 11.229 3.63a31 31 0 0 0 32.095-8.233Z" stroke="#462B34" stroke-width="2"></path></svg>


          </div>
        }

        <div className={`overflow-hidden absolute top-0  ${props.hover ? 'block' : 'hidden'}  rounded-[20px] w-full h-full   z-[-1]   animate-circleFill`}>
          <svg width="283" height="265" fill="none" xmlns="http://www.w3.org/2000/svg" className={`scale-[1.9] ${props.id === 1 ? 'bg-custom-blue' : 'bg-custom-yellow'} mt-8 opacity-50 `}>
            <g opacity="0.2" stroke="#462B34" stroke-width="0.5"><path d="M38.852 0v264.563M79.555 0v264.563M120.258 0v264.563M160.957 0v264.563M201.656 0v264.563M18.5 0v264.563M59.2 0v264.563M99.902 0v264.563M140.605 0v264.563M181.309 0v264.563M222.008 0v264.563M242.359 0v264.563M262.711 0v264.563M282.137 13.876H-.002M282.137 54.578H-.002M282.137 95.28H-.002M282.137 135.981H-.002M282.137 176.683H-.002M282.137 217.385H-.002M282.137 258.087H-.002M282.137 34.226H-.002M282.137 74.928H-.002M282.137 115.631H-.002M282.137 156.333H-.002M282.137 197.035H-.002M282.137 237.736H-.002"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className={`w-full h-full rounded-[20px] ${props.hover ? 'opacity-100' : 'opacity-0'} bg-primary-brown animate-circleFill z-[-10]x   top-[7px] left-[5px]    absolute  `}>

      </div>
    </div>
  );
};

export default PricingCard;
