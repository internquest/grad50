import React from 'react'
import Image, { StaticImageData } from "next/image";
import bluestar from "@/public/purplestar.svg"

type Props = {
    className?:string;
    text?:string;
    image?:string | StaticImageData;
}

const StarText = (props: Props) => {
  return (
    <div
                  className="font-WhyteInktrap-medium  undefined whitespace-nowrap
                  text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
                  xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                  <div className="w-5">
                    <Image
                      src={props.image || bluestar}
                      width={20}
                      className="w-fit h-fit"
                      height={20}
                      alt={"image"}
                      />
                  </div>
                  <div className="">{props.text} </div>
                </div>
  )
}

export default StarText