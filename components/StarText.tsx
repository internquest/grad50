import React from 'react'
import Image, { StaticImageData } from "next/image";
import bluestar from "@/public/purplestar.svg"

type Props = {
  className?: string;
  text?: string;
  image?: string | StaticImageData;
}

const StarText = (props: Props) => {
  return (
    <div
      className="font-WhyteInktrap-medium  undefined  md:whitespace-nowrap
                  text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
                  xl:text-[17px] 2xl:text-[20px]   flex items-start justify-start gap-1 my-3 md:my-5 xl:my-8"
    >
      <div className="basis-[10%] relative">
        <Image
          src={props.image || bluestar}
          height={20}
          width={20}

          alt={"image"}
        />
      </div>
      <div className="basis-[90%]">{props.text} </div>
    </div>
  )
}

export default StarText