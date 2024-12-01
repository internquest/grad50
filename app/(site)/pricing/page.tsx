
'use client'
import React, { useState, useEffect } from 'react';
import PromiseComponent from '@/components/PromiseComponent';
import PricingCard from '@/components/PricingCard';
import pricesvg from '@/public/priceingsvg.svg';
import Image from 'next/image';
import pricing from '@/public/price.svg';
import FaqINdividual from '@/components/FaqINdividual';

const Page = () => {

  const [firsthover, setFirstHover] = useState(false);
  const [secondhover, setSecondHover] = useState(false);
  const handlemousehover = (v: boolean) => {
    setFirstHover(v)
    setSecondHover(false)
  }
  const handlemousehover2 = (v: boolean) => {
    setSecondHover(v)
    setFirstHover(false)
  }
  return (
    <div>
      <div className="mt-5 lg:mt-20 mx-auto flex w-[95vw] flex-col items-center  max-w-[1800px]  my-0" id="pricing">
        <div className="text-center my-5 md:my-10 w-full text-3xl md:text-4xl lg:text-[58px]  font-primaryBold pb-3">Pricing</div>
        <div className="flex gap-5 flex-col w-full   md:flex-row">
          <div className="flex gap-7  basis-[20%] flex-col items-center xs:justify-around md:justify-around xs:flex-row md:flex-col">
            {/* <div className="mt-3 max-w-[100vw] md:mt-20 mx-10"> */}

            <PricingCard image1={pricing} title="Job Seeker" price="0" pricedescription="" buttonText="Join Whitelist" firsthover={firsthover} handlemousehover={handlemousehover} />
            <PricingCard image1={pricing} title="Job Seeker" price="0" pricedescription="" buttonText="Join Whitelist" firsthover={secondhover} handlemousehover={handlemousehover2} />

            {/* </div> */}
          </div>
          <div className="basis-[80%] ">
            <div className="undefined h-fit md:h-[720px] lg:h-[920px]   w-full cursor-pointer   relative  ">
              <div className="h-full  w-full border-2 bg-white rounded-[23px] border-primary-brown flex justify-center items-center relative z-[1] ">
                <div className="w-full h-full p-3 md:px-5 lg:px-5 md:py-6">
                  <div>
                    <FaqINdividual />
                    <FaqINdividual />
                    <FaqINdividual />
                  </div>
                </div>
              </div>
              <div className=" w-full h-full  rounded-[23px]  bg-primary-brown    absolute  " style={{ left: '9px', top: '11px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page; 