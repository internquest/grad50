'use client'
import HeroCards from '@/components/HeroCards'
import Image from 'next/image'
import React from 'react'
import brain from "@/public/why-india/brain.png";
import Navbar from '@/components/Navbar';

const page = () => {
    const cities = ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai', 'Kolkata', 'Ahmedabad', 'Delhi & NCR', 'Chandigarh', 'Kochi', 'Thiruvananthapuram']


    const rolescards = [
        {
            title: 'Artificial Intelligence',
            tags: ['AI Architect', 'Open AI', 'Dall E', 'Nvidia Canvas', 'Stable Diffusion'],
            image: '/why-india/brain.png',
            ids: ['AiIcon_svg__a', 'AiIcon_svg__b', 'AiIcon_svg__c'],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="none" viewBox="0 0 30 30" class="h-[30px] w-[30px]"><mask id="AiIcon_svg__b" width="30" height="30" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="url(#AiIcon_svg__a)" d="M0 0h30v30H0z"></path></mask><g mask="url(#AiIcon_svg__b)"><path fill="#102713" d="M-12.855-17.143h79.286v76.071h-79.286z"></path></g><defs><pattern id="AiIcon_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#AiIcon_svg__c" transform="scale(.00195)"></use></pattern><image xlink:href="/why-india/brain.png" id="AiIcon_svg__c" width="512" height="512"></image></defs></svg>`
        },
        {
            title: 'Cyber Security',
            tags: ['Nmap',
                'Skybox',
                'Metasploit',
                'Wireshark',
                'Daloradius',
                'Snort'],
            image: '/why-india/lock.png',
            ids: ['CyberIcon_svg__a', 'CyberIcon_svg__b', 'CyberIcon_svg__c'],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="none" viewBox="0 0 30 30" class="h-[30px] w-[30px]"><mask id="CyberIcon_svg__b" width="30" height="30" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="url(#CyberIcon_svg__a)" d="M0 0h30v30H0z"></path></mask><g mask="url(#CyberIcon_svg__b)"><path fill="#102713" d="M-36.43-22.5h79.286v76.071H-36.43z"></path></g><defs><pattern id="CyberIcon_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#CyberIcon_svg__c" transform="scale(.00195)"></use></pattern><image xlink:href="/why-india/lock.png" id="CyberIcon_svg__c" width="512" height="512"></image></defs></svg>`
        },
        {
            title: 'Big Data',
            tags: ['Snowpipe',
                'Big Data',
                'AWS Glue',
                'Apache Kafka',
                'Web Scraping',
            ],
            image: '/why-india/bigdata.png',
            ids: ['DataBaseIcon_svg__a', 'DataBaseIcon_svg__b', 'DataBaseIcon_svg__c'],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="none" viewBox="0 0 30 30" class="h-[30px] w-[30px]"><mask id="DataBaseIcon_svg__b" width="30" height="30" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="url(#DataBaseIcon_svg__a)" d="M0 0h30v30H0z"></path></mask><g mask="url(#DataBaseIcon_svg__b)"><path fill="#102713" d="M-5.855-8.78h47.561v45.366H-5.855z"></path></g><defs><pattern id="DataBaseIcon_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#DataBaseIcon_svg__c" transform="scale(.00195)"></use></pattern><image xlink:href="/why-india/bigdata.png" id="DataBaseIcon_svg__c" width="512" height="512"></image></defs></svg>`
        },
        {
            title: 'Database Developer',
            tags: ['MongoDB',
                'Oracle SQL',
                'MySQL',
                'Power BI',
                'Redis',
                'PostgreSQL',],
            image: '/why-india/database.png',
            ids: ['SqlIcon_svg__a', 'SqlIcon_svg__b', 'SqlIcon_svg__c'],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="none" viewBox="0 0 42 42" class="h-[42px] w-[42px]"><mask id="SqlIcon_svg__b" width="42" height="42" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><rect width="42" height="42" fill="url(#SqlIcon_svg__a)" rx="20"></rect></mask><g mask="url(#SqlIcon_svg__b)"><rect width="79.286" height="76.071" x="-14.355" y="-19.714" fill="#102713" rx="20"></rect></g><defs><pattern id="SqlIcon_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#SqlIcon_svg__c" transform="matrix(.0014 0 0 .0014 .143 .143)"></use></pattern><image xlink:href="/why-india/database.png" id="SqlIcon_svg__c" width="512" height="512"></image></defs></svg>`
        },
        {
            title: 'Machine Learning',
            tags: ['PyTorch',
                'Apache Spark',
                'R',
                'Apache NiFi',
                'Apache Hadoop'],
            image: '/why-india/machinelearning.png',
            ids: ['MachineLearnIcon_svg__a', 'MachineLearnIcon_svg__b', 'MachineLearnIcon_svg__c'],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="none" viewBox="0 0 32 34" class=" h-[34px] w-[30px]"><mask id="MachineLearnIcon_svg__b" width="32" height="34" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><rect width="31.733" height="34" x="0.137" fill="url(#MachineLearnIcon_svg__a)" rx="15.867"></rect></mask><g mask="url(#MachineLearnIcon_svg__b)"><rect width="74" height="76.071" x="-21" y="-20.5" fill="#102713" rx="20"></rect></g><defs><pattern id="MachineLearnIcon_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#MachineLearnIcon_svg__c" transform="matrix(.00185 0 0 .00172 .027 .059)"></use></pattern><image xlink:href="/why-india/machinelearning.png" id="MachineLearnIcon_svg__c" width="512" height="512"></image></defs></svg>`
        },
        {
            title: 'Cloud Computing',
            tags: ['Yami',
                'AWS',
                'Powershell',
                'JIRA',
                'Ansible',
                'Azure',
                'Apache Hadoop',],
            image: '/why-india/cloudcomputing.png',
            ids: ['CloudIcon_svg__a', 'CloudIcon_svg__b', 'CloudIcon_svg__c'],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="none" viewBox="0 0 38 38" class="h-[38px] w-[38px]"><mask id="CloudIcon_svg__b" width="38" height="38" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><rect width="38" height="38" fill="url(#CloudIcon_svg__a)" rx="19"></rect></mask><g mask="url(#CloudIcon_svg__b)"><rect width="79.286" height="76.071" x="-17.43" y="-18.5" fill="#102713" rx="20"></rect></g><defs><pattern id="CloudIcon_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#CloudIcon_svg__c" transform="translate(.105 .105)scale(.00154)"></use></pattern><image xlink:href="/why-india/cloudcomputing.png" id="CloudIcon_svg__c" width="512" height="512"></image></defs></svg>`

        }
    ]
    return (
        <div>
            <div className="relative pb-10">
                <div className="relative bg-secondary-color">
                    <div className="absolute z-0 h-full w-full">
                        <Image alt="Background-Image" priority src="https://hyring.com/backgrounds/WhyIndiaBg.svg" fill className='absolute h-full w-full inset-0 object-cover text-transparent -z-10' />
                    </div>

                    {/* <div className="pt-[14px]">
                        <div className="undefined mx-auto h-[67px] w-fit md:h-[102px]   relative  ">
                            <div className="w-[95vw] h-[63px] md:h-[93px] border-2 bg-custom-bg-white rounded-[10px] border-text-primary 2xl:max-w-[1800px] 2xl:mx-auto 2xl:my-0 relative z-1 flex items-center justify-center ">
                                <div className="flex w-full  items-center justify-between px-5 font-primaryMedium text-[17px] md:px-8 xl:px-10 xl:text-xl     ">
                                    <div className="-ml-7 scale-[0.6] md:scale-[0.8] xl:-ml-0 xl:scale-[1]"><a aria-label="HyringLogo" href="/">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="30" fill="none" viewBox="0 0 177 30">
                                                <path fill="#102713" d="M0 29.994V0h7.018v12.385H20.84V0h7.017v29.994h-7.017v-12.47H7.018v12.47zM60.629 29.994V0h16.164q3.51.001 6.114.986 2.605.986 4.041 2.785t1.436 4.24v.515q0 2.699-1.597 4.37-1.595 1.672-3.934 2.442v.771q2.126.085 3.296 1.179 1.169 1.093 1.17 2.893v9.813h-7.017v-8.998q0-1.028-.665-1.671t-2.206-.644h-9.784v11.313zm7.018-16.454h8.4q2.5.001 3.91-1.093 1.409-1.093 1.409-2.891v-.428q0-1.8-1.384-2.894t-3.934-1.093h-8.401zM91.984 29.994V0h7.018v29.994zM102.59 29.994V0h13.345l7.392 26.138h.957V0h6.912v29.994H117.85l-7.391-26.137h-.958v26.137zM148.504 29.994q-3.828 0-6.94-1.339-3.11-1.34-4.944-3.914t-1.835-6.283v-6.922q0-5.562 4.041-8.549T149.778 0c4.607 0 8.108.942 10.608 2.824q3.748 2.822 3.747 7.643v.163h-6.911v-.33a4.9 4.9 0 0 0-.823-2.76q-.826-1.236-2.473-1.957t-4.148-.722q-3.721 0-5.849 1.773-2.126 1.77-2.126 4.822v7.088q0 3.01 2.126 4.84 2.125 1.833 5.956 1.832t5.582-1.565q1.756-1.564 1.755-3.955v-.413h-8.827V14.67h15.738v15.328h-6.485v-3.338h-.958q-.372.703-1.197 1.482-.824.784-2.473 1.319-1.648.533-4.518.534zM34.565 30v-4.742h14.38q1.493 0 1.493-1.293v-5.388h-.958q-.428.731-1.331 1.467-.906.732-2.45 1.207-1.545.474-3.942.475-3.09-.001-5.406-1.142-2.318-1.141-3.595-3.167-1.278-2.024-1.28-4.656V0h6.712v12.328q0 2.414 1.466 3.62 1.464 1.207 4.182 1.207 3.087 0 4.793-1.658 1.705-1.659 1.705-4.633V0h6.712v25.172q0 2.2-1.599 3.512Q53.85 30 51.186 30H34.565"></path>
                                                <path fill="#102713" fill-rule="evenodd" d="M171.776.004a4.946 4.946 0 0 0-3.308 1.465c-.229.23-.364.387-.536.628a4.997 4.997 0 0 0 1.746 7.334 5 5 0 0 0 1.914.557c.169.016.636.016.811 0a5 5 0 0 0 2.827-1.17 7 7 0 0 0 .572-.57 5 5 0 0 0 .025-6.462 7 7 0 0 0-.607-.609 5 5 0 0 0-2.04-1.034 5 5 0 0 0-1.404-.139m-.097.627a4.3 4.3 0 0 0-1.573.422 4.3 4.3 0 0 0-1.201.854 4.369 4.369 0 0 0-.543 5.53 4.373 4.373 0 0 0 7.454-.284c.07-.123.204-.403.257-.538A4.38 4.38 0 0 0 172.296.63a5 5 0 0 0-.617 0m-1.469 4.368.002 2.632.457.002.457.003V5.615l.51.002.51.002.067.127.758 1.455.227.435.491-.003c.456-.002.492-.003.495-.019a3 3 0 0 0-.14-.282l-.34-.63c-.64-1.185-.704-1.306-.692-1.31.037-.012.236-.12.299-.163.195-.132.359-.304.464-.485.122-.21.176-.425.184-.733.013-.495-.116-.866-.401-1.151-.206-.207-.517-.363-.86-.432-.267-.054-.231-.053-1.402-.057l-1.088-.003zm.916-1.012v.88l.541-.001c.306 0 .571-.004.61-.01.401-.057.675-.29.747-.638a1.1 1.1 0 0 0-.072-.67q-.188-.377-.713-.43c-.063-.006-.315-.01-.61-.01h-.503z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    </div>
                                    <div className="hidden items-center  gap-8 mf2:flex xl:gap-10 xl3:gap-16 xl4:gap-20"></div><div className="flex items-center gap-8">
                                        <div className="hidden  items-center gap-5 text-secondary-color md:flex xl:gap-10 xl2:gap-8">
                                            <button className="navLink flex items-center gap-1 " id="basic-button" aria-haspopup="true" >
                                                <h2 className="text-xl font-medium">Login</h2>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#102713" viewBox="0 0 12 8" className="mt-1 text-sm "><path d="M1.41 0 6 4.58 10.59 0 12 1.41l-6 6-6-6z"></path>
                                                </svg>
                                            </button>
                                            <div>
                                                <h2 className="cursor-pointer whitespace-nowrap text-xl font-medium">Sign up</h2></div>
                                            <div className="w-full cursor-pointer xl:h-[57px]  relative  "><div className="w-full px-5  md:w-[170px] button-hover    h-[44px] xl:h-[52px] border bg-primary-color animate-glow rounded-[4px] border-secondary-color relative z-1 flex items-center justify-center ">
                                                <div id="basic-button" aria-haspopup="true" className="navLink flex h-full w-full items-center justify-center gap-2 ">
                                                    <h2 className="whitespace-nowrap text-xl font-medium"> Book a demo</h2>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#102713" viewBox="0 0 12 8" className="mt-1 text-sm "><path d="M1.41 0 6 4.58 10.59 0 12 1.41l-6 6-6-6z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                                <div className="w-full md:w-[170px] h-[44px] xl:h-[52px] border-2 rounded-[4px] duration-300  bg-secondary-color  border-primary-brown    absolute  "></div>
                                            </div>
                                        </div>
                                        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[2px] border border-secondary-color bg-primary-color mf2:hidden  ">
                                            <div className=""><span className="block h-[2px] w-[17px] bg-secondary-color duration-200 ease-in-out "></span><span className=" my-1 block h-[2px] origin-center bg-secondary-color duration-200 ease-in-out w-[17px]"></span><span className="block h-[2px] w-[17px] bg-secondary-color duration-200  ease-in-out "></span></div></div></div></div></div>
                            <div className="w-full h-[63px] md:h-[93px] rounded-[18px]  bg-text-primary !bg-custom-bg-grey border border-text-primary   absolute  " style={{ left: '0px', top: '6px' }}></div>
                        </div>
                        <div className="overflow-hidden"><div className="relative z-[100] mx-auto  mt-4 w-[95vw] rounded-[10px]  border-text-primary bg-custom-bg-white  px-6  border-0 py-0 opacity-0  duration-700  mf2:hidden">
                        </div>
                        </div>
                    </div> */}
                    <Navbar />


                    <div className=" mx-auto mt-10 max-w-[1800px] py-0 pb-10 lg:w-[90vw] xl:mt-20 xl:pb-20">
                        <h1 className="mx-auto flex flex-wrap font-cabiet-black  items-center justify-center font-primaryBold text-[40px] font-bold text-white  md:text-[48px] lg:text-[58px] ">
                            <span className="whitespace-nowrap">Why</span><span className="relative mx-[12px] xs:mx-[12px] md:mx-[20px]  lg:mx-[24px]">
                                <span className="absolute -left-[40px]   -top-[14px] scale-[0.67] md:-left-[30px] md:-top-[5px] md:scale-[0.8] lg:-left-[13px] lg:-top-[2px] lg:scale-[1]  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="175" height="83" fill="none">
                                        <path stroke="#9CE56D" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M168.789 17.36C126.082-7.56 16.005-4.747 2.772 45.1-11.353 98.305 173 87.313 173 45.099c0-20.487-39.399-31.357-63.46-31.357" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
                                    </svg>
                                </span>India</span>
                        </h1>
                        <p className="font-base mx-auto my-5 max-w-[900px] px-4 font-generalsans-m text-center font-primary text-custom-bg-grey md:text-lg lg:text-xl xl:text-2xl">Hiring IT talent from India offers companies a unique combination of skilled professionals, cost-effective solutions, and global adaptability</p>
                        <HeroCards />
                    </div>
                </div>

                {/* cities */}

                <div className="relative bg-secondary-color">
                    <div className="absolute z-0 h-full w-full">
                        <Image alt="Background-Image" priority src="https://hyring.com/backgrounds/WhyIndiaBg.svg" fill className='absolute h-full w-full inset-0 object-cover text-transparent -z-10' />
                    </div>
                    <div className="w-screen   overflow-hidden ">
                        <div className="px-5 pb-8 pt-16 text-center font-cabiet-b text-[36px] leading-[50px]  text-custom-bg-secondary  sm:text-[2.25rem]  md:py-24  md:text-[2.5rem] lg:text-[50px] ">Major Economics Hubs</div>
                        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-[25px] pb-28 xs:px-10 md:pb-40 xl:px-3">
                            {
                                cities.map((city, index) =>
                                    <div className='group'>
                                        <button className='group-hover:scale-[1.05] '>
                                            <div className="h-[57px] w-fit  cursor-pointer lg:h-[65px]  relative  ">
                                                <div className="w-fit h-[52px] border border-secondary-color z-[3] lg:h-[62px]  bg-white   rounded-[10px] false  relative z-1 flex items-center justify-center ">
                                                    <div className="flex items-center gap-2 pl-3 pr-5 xxs:pl-5 xxs:pr-7 xs:px-10 md:gap-[14px]">
                                                        <div className="scale-[0.7] md:scale-[1]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 21 30" className="h-[30px] w-full md:w-[25px] fill-secondary-color group-hover:fill-[#9ce56d] group-hover:stroke-[#0e0f0c] ">
                                                                <path fill="fill" d="M11.022 0c.649.123 1.309.205 1.946.376 1.766.47 3.295 1.385 4.58 2.7 1.454 1.484 2.38 3.262 2.798 5.31a9.05 9.05 0 0 1-.296 4.696c-.84 2.558-2.061 4.93-3.382 7.248-1.841 3.24-3.885 6.344-6.057 9.366-.29.405-.382.405-.672 0-2.826-3.955-5.478-8.017-7.673-12.371C1.449 15.71.737 14.05.268 12.295-.2 10.546-.016 8.833.523 7.148a10.2 10.2 0 0 1 3.15-4.707A10 10 0 0 1 8.758.117c.255-.04.51-.082.764-.117zM6.603 10.406c-.005 2.042 1.622 3.709 3.637 3.72 2.05.012 3.695-1.637 3.7-3.715.007-2.048-1.644-3.726-3.66-3.732-2.02 0-3.67 1.672-3.677 3.726"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="  font-generalsans-b text-base text-text-primary sm:text-lg lg:text-2xl">{city}</div>
                                                    </div>
                                                </div>

                                                <div className="w-full h-[52px] lg:h-[62px] group-hover:block hidden  rounded-[10px] bg-[rgb(156,229,109)]    absolute  " style={{ left: '4px', top: '3px' }}></div>
                                            </div>
                                        </button>
                                    </div>
                                )
                            }



                        </div>

                    </div>
                </div>
                {/* roled in demand */}


                <div className="bg-[#f8f8f8]">
                    <div className="w-screen   overflow-hidden">
                        <div className="px-5 pb-8 pt-16 text-center font-generalsans-b text-[36px] leading-[50px] text-text-primary  sm:text-[2.25rem]  md:pb-[53px]  md:pt-[122px]  md:text-[2.5rem] lg:text-[50px] ">Roles in Demand</div>
                        <div className="mx-auto flex h-full max-w-[1444px] flex-wrap items-center justify-center gap-10 pb-2 ">

                            {
                                rolescards.map((item, index) =>

                                    <div className='group'>
                                        <div className=" h-fit w-fit cursor-pointer    relative  ">
                                            <div className="w-[342px]  lg:w-[377px] h-fit lg:h-[258px]   border bg-white rounded-[20px] border-text-primary    relative z-10 flex items-center justify-center ">
                                                <div className=" flex h-full px-6 w-full py-[30px] flex-col font-primaryMedium    ">
                                                    <div dangerouslySetInnerHTML={{ __html: item.svg }} className="flex-center bg-custom-bg-lime border border-custom-border-lime min-h-[64px] w-16 rounded-full  ">

                                                    </div>
                                                    <div className="font-generalsans-m pt-3  text-[20px] md:text-2xl whitespace-nowrap lg:text-[28px] text-text-primary ">{item.title}
                                                        <div className="flex flex-wrap  gap-2 whitespace-nowrap pt-3">

                                                            {
                                                                item.tags.map((tag, index) =>
                                                                    <div className="rounded-[47px] border-[0.8px] border-[#CFD4D0] bg-custom-bg-ash px-4 py-1 text-sm font-normal">{tag}</div>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute -right-6 -top-6  scale-[.7] lg:scale-[0.9] group-hover:block hidden   ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 50 50" className="h-[62px] w-[62px] animate-spin">
                                                        <path fill="#9CE56D" stroke="#0E0F0C" d="M26.59 39.352a37.73 37.73 0 0 0-19.513 8.013 38.1 38.1 0 0 0 3.638-20.775c-.743-7.42-3.64-14.046-7.996-19.503a37.73 37.73 0 0 0 20.76 3.627 37.73 37.73 0 0 0 19.506-8.01c-3.047 6.223-4.5 13.373-3.632 20.777.867 7.397 3.723 14.078 8.017 19.507a37.73 37.73 0 0 0-20.78-3.636Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="w-[342px]  lg:w-[377px] z-[0] rounded-[20px] h-full lg:h-[258px]  bg-text-primary    group-hover:block hidden  absolute  " style={{ left: '4px', top: '4px' }}></div>
                                        </div>
                                    </div>
                                )
                            }



                        </div>
                    </div>
                </div>




            </div>



        </div>
    )
}

export default page
