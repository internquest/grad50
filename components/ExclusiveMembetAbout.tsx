import React from "react";
import Image from "next/image";
import start from "@/public/star.svg";
import yello from "@/public/smallyello.svg";
import logo from "@/public/logo.svg";
type Props = {};

const ExclusiveMembetAbout = (props: Props) => {
  return (
    <div className="w-full max-w-[] rounded-[9px]  border-2 border-primary-brown   relative  ">
      <div className="border-3   w-full !justify-start  bg-white   rounded-[9px] border-primary-brown flex   items-center relative z-1 ">
        <div className="w-full   flex-col  md:flex-row flex items-center p-5 md:p-10">
          <div className="flex flex-wrap-reverse  max-w-[1250px] w-full items-center justify-center gap-2  px-0 md:flex-nowrap   ">
            <div className="relative  w-full">
              <div
                style={{ "--d": "3s" } as any}
                className=" animate-pulse-start absolute top-[calc(10%-10px)] right-[calc(10%-3px)]"
                // className="animate-pulse-start  absolute md:right-[calc(10%-10px)] top-0 md:top-[calc(50% - 25px)]"
              >
                <Image
                  src={yello}
                  width={1000}
                  height={1000}
                  className="w-[49px] h-full object-cover"
                  alt=""
                />
              </div>

              <h1 className="font-cabiet-black text-[100px] leading-[120px] text-center text-[#462B34E5]">
                Grad50
              </h1>

              <div
                style={{ "--d": "-2s" } as any}
                className=" animate-pulse-start absolute left-[calc(10%-10px)] bottom-[calc(10%-3px)] "
              >
                <Image
                  src={start}
                  width={1000}
                  height={1000}
                  className="w-[49px]   h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="max-w-[1250px] w-full font-generalsans-m max-md:text-center text-xl leading-[40px] font-[500]">
            An exclusive members only collective of ambitious students aiming
            for the top 0.01% dream opportunities in tech
          </div>
        </div>
      </div>
      <div className="w-full h-full lg:h-full  rounded-[9px] bg-primary-brown border-3 border-white  top-2 left-[10px] -z-10  absolute  "></div>
    </div>
  );
};

export default ExclusiveMembetAbout;
