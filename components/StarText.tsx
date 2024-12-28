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
      className="font-generalsans-m  undefined  md:whitespace-nowrap
                  text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
                  xl:text-[17px] 2xl:text-[20px]   flex items-start justify-start gap-3 my-3 md:my-5 xl:my-8"
    >
      <div className=" h-[20px] w-[20px] relative">
        <Image
          src={props.image || bluestar}
          width={20}
          height={20}
          className='rotate-[-30deg]'
          alt={"image"}
        />
      </div>
      <div className="">{props.text} </div>
    </div>
  )
}

export default StarText