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
import FootarCard from "./FootarCard";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative my-10 z-0">
      {/* there is another dive to applied here */}
      <div className="my-10 flex flex-col gap-5 px-10 font-WhyteInktrap-regular md:hidden">
        <FootarCard heading=" I&apos;m a Job Seeker, Let&apos;s work together!" className="bg-custom-green" />
        <FootarCard subheading="Open access for overseas companies" heading=" I&apos;m an Employer, Let's talk business!" className="bg-custom-blue" />

      </div>
      {/* this above  */}
      <div className="footer relative mx-auto my-0 mt-10 h-full w-[95vw] max-w-[1800px] rounded-[30px] border-2 border-primary-brown pb-2 pt-10 font-WhyteInktrap-regular md:mt-60 md:pt-20 xl:h-[488px]">
        <div className="absolute -top-40  left-0 right-0 z-10 hidden  flex-col items-center justify-center gap-5 md:flex lg:-top-40 lg:flex-row lg:gap-20      ">
          <div className="undefined group footer_adjust cursor-pointer  xl:w-[40%]  relative  ">
            <div className="item-start group justify-start  border-2 bg-white  border-primary-brown bg-custom-green  rounded-lg   w-full flex  items-center relative z-10 ">
              <div className="flex flex-col items-start  gap-2 px-2 py-8 md:px-5 md:py-12">
                <div className="flex flex-row-reverse">
                  <div className="-ml-2 group-hover:animate-bouncelogo">
                    <Image
                      src={
                        "	https://hyring.nyc3.cdn.digitaloceanspaces.com/static/avatarone.png"
                      }
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                  <div className="-ml-2 group-hover:animate-bouncelogo group-hover:[animation-delay:-.1s]">
                    <Image
                      src={
                        "https://hyring.nyc3.cdn.digitaloceanspaces.com/static/avatartwo.png"
                      }
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                  <div className="-ml-2 group-hover:animate-bouncelogo group-hover:[animation-delay:-.2s]">
                    <Image
                      src={avatarthree}
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="pr-10  ">
                  <div className="text-medium  text-lg md:text-2xl lg:text-[26px] ">
                    I&apos;m a Job Seeker, Let&apos;s work together!
                  </div>
                  <p className="mt-1 font-WhyteInktrap-regular  ">
                    Invitation-only exclusive access
                  </p>
                </div>
                <div className="absolute opacity-0 group-hover:opacity-100   -left-8 -top-8 scale-[.7] lg:scale-[0.9] ">
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
                    className="w-fit group-hover:animate-spin-circle-slow h-fit"
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
          {/* <div className="undefined group footer_adjust cursor-pointer  xl:w-[40%]  relative  ">
            <div className="item-start justify-start  border-2 bg-white  border-primary-brown bg-custom-blue  rounded-lg   w-full flex  items-center relative z-10 ">
              <div className="flex flex-col items-start  gap-2 px-2 py-8 md:px-5 md:py-12">
                <div className="flex  flex-row-reverse">
                  <div className="-ml-2">
                    <Image
                      src={
                        "https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companyone.png"
                      }
                      width={50}
                      height={50}
                      className="group-hover:animate-bounce"
                      alt="image"
                    />
                  </div>
                  <div className="-ml-2">
                    <Image
                      src={
                        "https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companytwo.png"
                      }
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                  <div className="-ml-2">
                    <Image
                      src={
                        "https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companythree.png"
                      }
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
                  <p className="mt-1 font-WhyteInktrap-regular  ">
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
                    className="w-fit  group-hover:animate-spin-slow h-fit"
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
          </div> */}
          <FootarCard />
        </div>

        {/* just add this above mobile logo */}

        <div className="max-lg:block  hidden   basis-[300px] pt-0 text-center md:pt-60 lg:pt-5">
          <div className="items-center flex flex-col justify-center">
            <Image
              src={logo}
              className="w-fit  h-fit"
              width={100}
              height={100}
              alt="image"
            />
            <p className="mb-0 mt-5 max-lg:block hidden l text-center font-WhyteInktrap-regular text-xl xs:block sm:mb-10">
              Meet the new gold standard in contract Hyring
            </p>
          </div>
        </div>
        <div className="m-auto mt-0 flex max-w-min items-start gap-x-2 px-2 pt-6 sm:mt-5 md:items-start md:gap-x-12 md:px-4 lg:max-w-[1200px] xl:max-w-[1200px] xl:gap-16 2xl:max-w-[85%]">
          <div className="lg:block hidden  basis-[300px]">
            <div className="">
              <Image
                src={logo}
                className="w-fit  h-fit"
                width={100}
                height={100}
                alt="image"
              />
            </div>
            <p className="mb-0 mt-5 lg:block hidden text-start font-WhyteInktrap-regular text-xl xs:block sm:mb-10">
              Meet the new gold standard in contract Hyring
            </p>
          </div>
          {/* on hover the bangalore it should show the p */}
          <div className="max-sm:my-5 max-sm:flex hidden mb-16 flex-1 flex-col gap-y-5 ">
            <h2 className="text-[22px] font-WhyteInktrap-medium">Location</h2>
            <div className="group">
              <p className="font-WhyteInktrap-regular text-lg group-hover:opacity-0 transition-opacity">
                Bangalore
              </p>
              <p className="mt-2 min-w-[169px] text-sm/[17px] font-[350] text-[#826770] ">
                WeWork, #26, Laskar Hosur Rd, Koramangala, Bengaluru, Karnataka
              </p>
            </div>
            <div>
              <p className="font-WhyteInktrap-regular text-lg">Chennai</p>
              <p className="mt-2 min-w-[169px] text-sm/[17px] font-[350] text-[#826770] ">
                TheHive, Level 3, VR Mall, Anna Nagar, Chennai
              </p>
            </div>
          </div>
          <div className="max-sm:my-5  mb-16 flex flex-1 flex-col gap-y-5">
            <h1 className="text-[22px] font-WhyteInktrap-medium">Company</h1>
            <Link href={"/why-india"}>
              <p className="font-WhyteInktrap-regular text-lg hover:opacity-70">
                Why Inda
              </p>
            </Link>
            <Link href={"/pricing"}>
              {" "}
              <p className="font-WhyteInktrap-regular text-lg hover:opacity-70">
                Pricing
              </p>
            </Link>
            <Link href={"/contact-us"}>
              {" "}
              <p className="font-WhyteInktrap-regular whitespace-nowrap text-lg hover:opacity-70">
                Contaact us
              </p>
            </Link>
            <Link href={"/about-us"}>
              {" "}
              <p className="font-WhyteInktrap-regular whitespace-nowrap text-lg hover:opacity-70">
                About Hyring
              </p>
            </Link>
          </div>
          <div className="max-sm:my-5 overflow-hidden h-full max-sm:hidden  flex mb-16 flex-1 flex-col justify-start gap-y-5 ">
            <h2 className="text-[22px] font-WhyteInktrap-medium  ">Location</h2>

            <div className="group">
              <p className="cursor-pointer  font-WhyteInktrap-regular text-lg hover:opacity-70">
                Bangalore
              </p>
              <p className="mt-2 max-w-[130px] hidden group-hover:opacity-100 overflow-hidden group-hover:flex text-sm/[17px] font-[350] text-[#826770] ">
                WeWork, #26, Laskar Hosur Rd, Koramangala, Bengaluru, Karnataka
              </p>
            </div>
            <div className="group">
              <p className="cursor-pointer font-WhyteInktrap-regular text-lg hover:opacity-70">
                Chennai
              </p>
              <p className="mt-2 max-w-[100px] hidden group-hover:opacity-100 overflow-hidden group-hover:flex text-sm/[17px] font-[350] text-[#826770] ">
                TheHive, Level 3, VR Mall, Anna Nagar, Chennai
              </p>
            </div>
          </div>
          <div className="max-sm:hidden flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-7">
              <h2 className="text-[22px] font-WhyteInktrap-medium">Social</h2>
              <div className="flex items-center gap-5">
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FLinkedinIcon.png&w=32&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FfacebookIcon.png&w=48&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FinstagramIcon.png&w=48&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FtwitterIcon.png&w=48&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FyoutubeIcon.png&w=48&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-7">
              <h2 className="text-[22px]">Subscribe Newsletter</h2>
              <div className="flex items-center gap-5">
                <div className="h-[60px] undefined w-fit cursor-pointer  text-2xl    relative  ">
                  <div className="w-[260px] h-[57px] border bg-white rounded-[8px] border-primary-brown flex justify-center items-center relative z-10 ">
                    <div className="inline-flex flex-col relative m-0 p-0 ">
                      <div className="leading-[2rem] text-ellipsis   MuiInputBase-colorPrimary  w-[230px] ">
                        <input
                          type="text"
                          placeholder="Enter Email Email "
                          className="outline-none placeholder:text-base placeholder:font-thin font-medium text-base w-full h-full py-[16.5px]  "
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[260px] h-[45px] md:h-[57px] rounded-[8px]  bg-primary-brown    absolute  "
                    style={{ left: "4px", top: "5px" }}
                  ></div>{" "}
                </div>
                <button tabIndex={0} className="hover:scale-105 duration-300">
                  <div className="h-[56px] w-[56px] cursor-pointer  relative    ">
                    {/* <div className="w-[46px] md:w-[56px] h-[45px] md:h-[57px] border bg-primary-orange rounded-[8px] border-primary-brown flex justify-center items-center relative z-10 "> */}
                    <div className="w-[52px] z-50  h-[52px] border bg-primary-orange rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={imagearrow}
                        width={100}
                        className="w-fit h-fit"
                        height={100}
                        alt={"image"}
                      />
                    </div>
                    <div
                      className="w-[56px] h-[56px]    rounded-[4px]  bg-primary-brown    absolute      "
                      style={{ left: "2px", top: "2px" }}
                    ></div>{" "}
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* add the footer footer */}
        </div>
        <div className="max-sm:flex hidden flex-col gap-y-6 pb-12 text-center">
          <div className="flex flex-col gap-y-7">
            <h2 className="text-[22px]">Social</h2>
            <div className="m-auto flex items-center gap-5">
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FLinkedinIcon.png&w=32&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FfacebookIcon.png&w=48&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FinstagramIcon.png&w=48&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FtwitterIcon.png&w=48&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FyoutubeIcon.png&w=48&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <h2 className="text-[22px]">Subscribe Newsletter</h2>
            <div className="m-auto flex items-center gap-2 pb-0">
              <div className="h-[60px] undefined w-fit cursor-pointer  text-2xl    relative  ">
                <div className="w-[215px] h-[57px] border bg-white rounded-[8px] border-primary-brown flex justify-center items-center relative z-10 ">
                  <div className="">
                    <div className="leading-[2rem] text-ellipsis px-[10px]    w-[230px] ">
                      <input
                        type="text"
                        placeholder="Enter Email Address"
                        className="outline-none placeholder:text-base placeholder:font-thin font-medium text-base w-full h-full py-[16.5px]  "
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="w-[215px] xxs:w-[270px] h-[57px]  rounded-[8px]  bg-primary-brown    absolute    "
                  style={{ left: "4px", top: "5px" }}
                ></div>{" "}
              </div>
              <button tabIndex={0} className="hover:scale-105 duration-300">
                <div className="h-[56px] w-[56px] cursor-pointer  relative    ">
                  {/* <div className="w-[46px] md:w-[56px] h-[45px] md:h-[57px] border bg-primary-orange rounded-[8px] border-primary-brown flex justify-center items-center relative z-10 "> */}
                  <div className="w-[52px] z-50  h-[52px] border bg-primary-orange rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={imagearrow}
                      width={100}
                      className="w-fit h-fit"
                      height={100}
                      alt={"image"}
                    />
                  </div>
                  <div
                    className="w-[54px] h-[54px]    rounded-[4px]  bg-primary-brown    absolute      "
                    style={{ left: "2px", top: "2px" }}
                  ></div>{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="pb-[5px] ml-16 mr-16 mt-0 border-t-[1px] border-solid border-[#593a25] pt-[8px] font-WhyteInktrap-regular xxs:mt-10 lg:ml-24 lg:mr-24 xl:mt-6"> */}

        <div className=""></div>
        <div className=""></div>
        <div className="sm:mt-10 pb-[5px] ml-16 mr-16 mt-0 border-t-[1px] border-solid border-[#593a25] pt-[8px] font-WhyteInktrap-regular  lg:ml-24 lg:mr-24 xl:mt-6">
          <div className="mt-2 flex flex-col justify-between  gap-y-5 md:mt-0 md:flex-row md:gap-y-0">
            <div className="flex flex-row items-center justify-around  gap-0 md:justify-center md:gap-3 lg:gap-8">
              <Link href={"/privacy-policy"}>
                <p className="cursor-pointer font-WhyteInktrap-regular text-sm hover:opacity-70 md:text-base lg:text-lg">
                  Privacy Policy
                </p>
              </Link>
              <Link href={'/terms-conditions'}>
                <p className="cursor-pointer font-WhyteInktrap-regular text-sm hover:opacity-70 md:text-base lg:text-lg">
                  Terms & Conditions
                </p>
              </Link>
            </div>
            <div className="flex justify-center font-WhyteInktrap-regular text-sm md:text-base lg:text-lg">
              Copyright © 2023 Hyring. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
