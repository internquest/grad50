import React from "react";
import logo from "@/public/logo hyring.svg";
import imagearrow from "@/public/footerimg1.svg";
import Image from "next/image";
import footerarrow from "@/public/footerimg1.svg";
import avatarthree from "@/public/avatarthree.png";
import circle from "@/public/circleyello.svg";
import circlegreen from "@/public/circlegreen.svg";
import hoverstar from "@/public/hoverstar.svg";

import Link from "next/link";
import { twMerge } from 'tailwind-merge';
interface Props {
  heading?: string;
  subheading?: string;
  className?: string;
}

const FootarCard = (props: Props) => {
  return (
    <div className=" undefined group group/item footer_adjust cursor-pointer  lg:w-[40%]  relative  ">
      <div className={twMerge("item-start justify-start  border-2 bg-white  border-primary-brown bg-custom-blue  rounded-lg   w-full flex group  items-center relative z-10", props.className)}>
        <div className="flex flex-col items-start  gap-2 px-2 py-8 md:px-5 md:py-12">
          <div className="flex flex-row-reverse">
            <div className="-ml-2 group-hover:animate-bouncelogo"   >
              {/* <Image
                src={"https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companyone.png"}
                width={50}
                height={50}
                className=" w-fit"
                alt="image"
              /> */}
              <Image
                src={"https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companyone.png"}
                width={50}
                height={50}
                alt="image"
              />
            </div>
            <div className="-ml-2 group-hover:animate-bouncelogo group-hover:[animation-delay:-.1s]"   >
              <Image
                src={"https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companytwo.png"}
                width={50}
                height={50}
                alt="image"
              />
            </div>
            <div className="-ml-2 group-hover:animate-bouncelogo group-hover:[animation-delay:-.2s]"   >
              <Image
                src={"https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companythree.png"}
                width={50}
                height={50}
                alt="image"
              />
            </div>
          </div>

          <div className="pr-10">
            <div className="text-medium  text-lg md:text-2xl lg:text-[26px] ">
              I&apos;m an Employer, Let's talk business!
            </div>
            <p className="mt-1 font-generalsans-r  ">
              Open access for overseas companies
            </p>
          </div>
          <div className="absolute opacity-0 group-hover:opacity-100 -left-8 -top-8 scale-[.7] lg:scale-[0.9] ">
            <Image
              src={hoverstar}
              width={100}
              height={100}
              alt="image"
              className="w-fit group-hover:animate-spin-slow h-fit"
            />
          </div>
        </div>
        <div className="absolute -right-10 scale-[0.7] md:-right-10 md:scale-[1]">
          <div className="h-fit w-fit">
            <Image
              src={circle}
              width={100}
              height={100}
              alt="image"
              className="w-fit  group-hover:animate-spin-circle-slow h-fit"
            />
            <div className="absolute bottom-[2.47rem] left-[2rem]">
              <Image
                src={footerarrow}
                width={100}
                height={100}
                alt="image"
                className="w-fit h-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full rounded-lg bg-primary-brown top-[5px] left-[5px]   absolute  "></div>
    </div>
  );
};

export default FootarCard;
