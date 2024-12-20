import React from 'react'

const page = () => {
    return (
        <div>
            <div className=" mx-auto my-0 px-[10px] mb-20 mt-3 h-full max-w-[1100px] md:mt-20 lg:w-[90vw]">
                <h1 className="mx-auto flex  w-[350px] flex-wrap items-center justify-center font-primaryBold text-[40px]  text-text-primary xs:w-[105%] md:text-[48px]  lg:w-full  lg:text-[58px]">
                    <span className="-ml-2 whitespace-nowrap  xs:ml-0 ">Feel Free to</span>
                    <span className="relative mr-[12px] hidden  xs:mx-[12px] xs:block md:mx-[20px]  lg:mx-[24px]">
                        <span className="absolute -left-[65px]  -top-[24px] scale-[0.62] sm:-left-[100x] md:-left-[46px]   md:-top-[20px] md:scale-[0.74] lg:-left-[30px] lg:-top-[10px] lg:scale-[0.9]  ">
                            <svg width="289" height="105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M278.281 25.104C207.283-5.892 19.871-8.963 4.5 55c-15.5 64.5 280.782 57.107 280.781 4.603 0-25.48-65.499-39-105.499-39" stroke="#9CE56D" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
                            </svg>
                        </span>Contact<span className=" xs:ml-4 md:ml-7">Us</span>
                    </span>
                    <span className="relative mr-[12px] block  xs:mx-[12px] xs:hidden md:mx-[20px]  lg:mx-[24px]">
                        <span className="absolute -left-[65px]  -top-[25px] scale-[0.60] ">
                            <svg width="289" height="105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M278.281 25.104C207.283-5.892 19.871-8.963 4.5 55c-15.5 64.5 280.782 57.107 280.781 4.603 0-25.48-65.499-39-105.499-39" stroke="#9CE56D" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
                            </svg>
                        </span>Contact us
                    </span>
                </h1>

                <div>
                    <div className="h-fit undefined mx-auto mt-9 w-[95%] cursor-pointer lg:w-[100%]     relative  ">
                        <div className="w-full lg:h-[100px] before:bottom-0 before:top-0 before:left-[50%] before:right-[50%] hover:before:left-0 hover:before:right-0 before:content-[''] before:absolute before:duration-300 before:z-[-1] before:bg-[#9ce56d] border border-text-primary  bg-custom-bg-white rounded-[10px] hover:before:bg-primary-color hover:border-secondary-color   contact-tab py-5  relative z-1 flex items-center justify-center ">
                            <div className="flex h-full w-full   items-center justify-start gap-3 px-2 pl-4 text-xl  md:justify-start md:px-8 md:text-3xl lg:text-4xl xl:gap-6">
                                <div className="  md:delay-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="38" fill="#9CE56D" viewBox="0 0 46 38">
                                        <path fill="" fill-rule="evenodd" d="M15.582 34.666c8.053 0 14.582-5.407 14.582-12.078 0-6.67-6.529-12.078-14.582-12.078S1 15.917 1 22.588c0 3.003 1.323 5.75 3.512 7.862L1.369 37l9.517-2.974c1.473.415 3.053.64 4.696.64z" clip-rule="evenodd"></path>
                                        <path fill="#0E0F0C" d="M4.512 30.45l.45.216.156-.325-.26-.25-.346.359zM1.369 37l-.451-.216-.497 1.036 1.097-.343-.15-.477zm9.517-2.974l.135-.48-.143-.041-.141.044.149.477zm18.778-11.438c0 6.31-6.213 11.578-14.082 11.578v1c8.237 0 15.082-5.547 15.082-12.578h-1zM15.582 11.01c7.87 0 14.082 5.268 14.082 11.578h1c0-7.03-6.845-12.578-15.082-12.578v1zM1.5 22.588c0-6.31 6.212-11.578 14.082-11.578v-1C7.345 10.01.5 15.557.5 22.588h1zm3.359 7.502C2.753 28.058 1.5 25.437 1.5 22.588h-1c0 3.157 1.392 6.028 3.664 8.222l.695-.72zm-3.04 7.126l3.143-6.55-.901-.432-3.143 6.55.902.432zm8.918-3.667L1.22 36.523l.298.954 9.517-2.973-.298-.955zm4.845.617c-1.597 0-3.131-.218-4.56-.62l-.272.962c1.518.427 3.143.658 4.832.658v-1z"></path>
                                        <path fill="" fill-rule="evenodd" d="M25.765 32.865c-10.623 0-19.235-7.133-19.235-15.932C6.53 8.133 15.142 1 25.765 1S45 8.133 45 16.933c0 3.96-1.745 7.583-4.632 10.37l4.145 8.64-12.554-3.922a22.858 22.858 0 01-6.194.844z" clip-rule="evenodd"></path>
                                        <path fill="#462B34" d="M40.368 27.303l-.451.217-.156-.326.26-.25.347.36zm4.145 8.64l.451-.216.497 1.036-1.097-.342.15-.478zM31.96 32.021l-.136-.481.143-.04.142.044-.15.477zM7.03 16.933c0 8.439 8.296 15.432 18.735 15.432v1c-10.807 0-19.735-7.273-19.735-16.432h1zM25.765 1.5C15.325 1.5 7.03 8.493 7.03 16.933h-1C6.03 7.773 14.958.5 25.765.5v1zM44.5 16.933C44.5 8.493 36.204 1.5 25.765 1.5v-1C36.572.5 45.5 7.773 45.5 16.933h-1zm-4.48 10.01c2.804-2.706 4.48-6.204 4.48-10.01h1c0 4.114-1.814 7.862-4.785 10.73l-.695-.72zm4.043 9.217l-4.146-8.64.901-.433 4.146 8.64-.901.433zm-11.955-4.616l12.555 3.922-.299.955-12.554-3.923.298-.954zm-6.343.821c2.121 0 4.16-.29 6.058-.825l.271.962c-1.987.56-4.116.863-6.329.863v-1z"></path>
                                        <path fill="#fff" stroke="#0E0F0C" d="M17.818 19.175a2.328 2.328 0 002.318-2.337 2.328 2.328 0 00-2.318-2.338 2.328 2.328 0 00-2.318 2.338 2.328 2.328 0 002.318 2.337zM26 19.175a2.328 2.328 0 002.319-2.337A2.328 2.328 0 0026 14.5a2.328 2.328 0 00-2.318 2.338A2.328 2.328 0 0026 19.175zM34.182 19.175a2.328 2.328 0 002.318-2.337 2.328 2.328 0 00-2.318-2.338 2.328 2.328 0 00-2.318 2.338 2.328 2.328 0 002.318 2.337z"></path>
                                    </svg>
                                </div>
                                <div className=" font-primary text-text-primary   ">Live Chat</div>
                                <div className="text-nowrap   text-text-primary font-primaryBold "></div>
                                <div className=" hidden grow">
                                    <div className="relative h-full w-full">
                                        <div className="arrow-bounce absolute -top-[8px]   scale-[0.8] lg:-top-[10px] lg:scale-[1]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 78 21" className="h-[19px] w-[76px]">
                                                <path stroke="#102713" stroke-linecap="round" stroke-width="2" d="M1.979 10.846h72.599"></path><path stroke="#102713" stroke-width="2" d="M67.408.987c0 5.445 4.582 9.86 10.234 9.86-5.652 0-10.235 4.414-10.235 9.859"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full  rounded-[10px]  duration-500 delay-100 bg-secondary-color   absolute  "></div>
                    </div>
                </div>


                <a target="_blank" href="https://wa.me/+917070701947?text=Hi%20Hyring">
                    <div className="h-fit undefined mx-auto mt-9 w-[95%] cursor-pointer lg:w-[100%]     relative  ">
                        <div className="w-full lg:h-[100px] border before:bottom-0 before:top-0 before:left-[50%] before:right-[50%] hover:before:left-0 hover:before:right-0 before:content-[''] before:absolute before:duration-300 before:z-[-1] before:bg-[#9ce56d] border-text-primary  bg-custom-bg-white rounded-[10px] hover:before:bg-primary-color hover:border-secondary-color   contact-tab py-5  relative z-1 flex items-center justify-center ">
                            <div className="flex h-full w-full   items-center justify-start gap-3 px-2 pl-4 text-xl  md:justify-start md:px-8 md:text-3xl lg:text-4xl xl:gap-6">
                                <div className="  md:delay-200">
                                    <svg width="40" height="39" viewBox="0 0 40 39" fill="#9CE56D" xmlns="http://www.w3.org/2000/svg" stroke="#0E0F0C" stroke-width="1.019">
                                        <mask id="path-1-outside-1_2670_3599" maskUnits="userSpaceOnUse" x="0" y="0.254883" width="40" height="39" fill="black"><rect fill="white" y="0.254883" width="40" height="39"></rect>
                                            <path d="M2 37.3284C2.649 35.4032 3.28136 33.5336 3.91927 31.664C4.31865 30.4823 4.71804 29.3061 5.12297 28.1244C5.18398 27.9469 5.1618 27.8138 5.0675 27.664C3.28691 24.6126 2.50478 21.3117 2.69338 17.7888C3.1094 10.0606 8.80064 3.30885 16.3945 1.71662C23.2672 0.279718 29.136 2.19928 33.8343 7.43646C36.1308 9.99958 37.4509 13.0509 37.9113 16.4684C39.1483 25.7 33.1021 33.7611 24.7705 35.8415C20.3551 36.9456 16.1005 36.4241 12.0512 34.3325C11.8792 34.2437 11.7406 34.2382 11.5575 34.2937C8.46781 35.2812 5.37258 36.2687 2.27735 37.2507C2.20524 37.2729 2.12758 37.2951 2 37.3284Z"></path>
                                        </mask>
                                        <path d="M2 37.3284C2.649 35.4032 3.28136 33.5336 3.91927 31.664C4.31865 30.4823 4.71804 29.3061 5.12297 28.1244C5.18398 27.9469 5.1618 27.8138 5.0675 27.664C3.28691 24.6126 2.50478 21.3117 2.69338 17.7888C3.1094 10.0606 8.80064 3.30885 16.3945 1.71662C23.2672 0.279718 29.136 2.19928 33.8343 7.43646C36.1308 9.99958 37.4509 13.0509 37.9113 16.4684C39.1483 25.7 33.1021 33.7611 24.7705 35.8415C20.3551 36.9456 16.1005 36.4241 12.0512 34.3325C11.8792 34.2437 11.7406 34.2382 11.5575 34.2937C8.46781 35.2812 5.37258 36.2687 2.27735 37.2507C2.20524 37.2729 2.12758 37.2951 2 37.3284Z"></path>
                                        <path d="M2 37.3284C2.649 35.4032 3.28136 33.5336 3.91927 31.664C4.31865 30.4823 4.71804 29.3061 5.12297 28.1244C5.18398 27.9469 5.1618 27.8138 5.0675 27.664C3.28691 24.6126 2.50478 21.3117 2.69338 17.7888C3.1094 10.0606 8.80064 3.30885 16.3945 1.71662C23.2672 0.279718 29.136 2.19928 33.8343 7.43646C36.1308 9.99958 37.4509 13.0509 37.9113 16.4684C39.1483 25.7 33.1021 33.7611 24.7705 35.8415C20.3551 36.9456 16.1005 36.4241 12.0512 34.3325C11.8792 34.2437 11.7406 34.2382 11.5575 34.2937C8.46781 35.2812 5.37258 36.2687 2.27735 37.2507C2.20524 37.2729 2.12758 37.2951 2 37.3284Z" stroke="#0E0F0C" stroke-width="1.019" mask="url(#path-1-outside-1_2670_3599)"></path>
                                        <mask id="path-2-outside-2_2670_3599" maskUnits="userSpaceOnUse" x="10.7225" y="9.79102" width="20" height="19" fill="black">
                                            <rect fill="white" x="10.7225" y="9.79102" width="20" height="19"></rect>
                                            <path d="M14.9311 10.8206C14.9976 10.8206 15.0975 10.8317 15.1973 10.8206C15.7409 10.7318 16.0238 11.037 16.2124 11.4808C16.6895 12.6125 17.1776 13.7388 17.6269 14.8761C17.7046 15.0647 17.6713 15.3365 17.5992 15.5363C17.3884 16.1243 16.9391 16.5515 16.5286 17.0009C16.1736 17.3837 16.1514 17.528 16.4177 17.9718C17.8377 20.3185 19.8069 22.0051 22.3585 23.0037C22.708 23.1424 22.9132 23.1091 23.1518 22.8262C23.6066 22.288 24.0504 21.7499 24.483 21.1951C24.7715 20.8234 24.9656 20.7291 25.4094 20.9066C25.9142 21.1063 26.4078 21.3393 26.9015 21.5723C27.6005 21.9052 28.2938 22.2547 28.9928 22.5876C29.2646 22.7208 29.3866 22.9149 29.3866 23.2201C29.381 24.5626 28.9262 25.6445 27.7114 26.3435C26.48 27.0592 25.2041 27.3199 23.8118 26.9038C21.6818 26.2658 19.6017 25.5224 17.8211 24.1244C16.1903 22.8428 14.8368 21.3227 13.6497 19.6306C13.0396 18.7596 12.4627 17.8719 12.0966 16.8622C11.6362 15.6028 11.5751 14.3379 12.0577 13.073C12.3406 12.3241 12.8343 11.7138 13.4112 11.1757C13.8328 10.7873 14.3542 10.7485 14.9311 10.8206Z" stroke="#0E0F0C" stroke-width="1.019"></path>
                                        </mask>
                                        <path id="whatsapp-call" d="M14.9311 10.8206C14.9976 10.8206 15.0975 10.8317 15.1973 10.8206C15.7409 10.7318 16.0238 11.037 16.2124 11.4808C16.6895 12.6125 17.1776 13.7388 17.6269 14.8761C17.7046 15.0647 17.6713 15.3365 17.5992 15.5363C17.3884 16.1243 16.9391 16.5515 16.5286 17.0009C16.1736 17.3837 16.1514 17.528 16.4177 17.9718C17.8377 20.3185 19.8069 22.0051 22.3585 23.0037C22.708 23.1424 22.9132 23.1091 23.1518 22.8262C23.6066 22.288 24.0504 21.7499 24.483 21.1951C24.7715 20.8234 24.9656 20.7291 25.4094 20.9066C25.9142 21.1063 26.4078 21.3393 26.9015 21.5723C27.6005 21.9052 28.2938 22.2547 28.9928 22.5876C29.2646 22.7208 29.3866 22.9149 29.3866 23.2201C29.381 24.5626 28.9262 25.6445 27.7114 26.3435C26.48 27.0592 25.2041 27.3199 23.8118 26.9038C21.6818 26.2658 19.6017 25.5224 17.8211 24.1244C16.1903 22.8428 14.8368 21.3227 13.6497 19.6306C13.0396 18.7596 12.4627 17.8719 12.0966 16.8622C11.6362 15.6028 11.5751 14.3379 12.0577 13.073C12.3406 12.3241 12.8343 11.7138 13.4112 11.1757C13.8328 10.7873 14.3542 10.7485 14.9311 10.8206Z" fill="#FAFAFA" stroke="#0E0F0C"></path>
                                        <path d="M14.9311 10.8206C14.9976 10.8206 15.0975 10.8317 15.1973 10.8206C15.7409 10.7318 16.0238 11.037 16.2124 11.4808C16.6895 12.6125 17.1776 13.7388 17.6269 14.8761C17.7046 15.0647 17.6713 15.3365 17.5992 15.5363C17.3884 16.1243 16.9391 16.5515 16.5286 17.0009C16.1736 17.3837 16.1514 17.528 16.4177 17.9718C17.8377 20.3185 19.8069 22.0051 22.3585 23.0037C22.708 23.1424 22.9132 23.1091 23.1518 22.8262C23.6066 22.288 24.0504 21.7499 24.483 21.1951C24.7715 20.8234 24.9656 20.7291 25.4094 20.9066C25.9142 21.1063 26.4078 21.3393 26.9015 21.5723C27.6005 21.9052 28.2938 22.2547 28.9928 22.5876C29.2646 22.7208 29.3866 22.9149 29.3866 23.2201C29.381 24.5626 28.9262 25.6445 27.7114 26.3435C26.48 27.0592 25.2041 27.3199 23.8118 26.9038C21.6818 26.2658 19.6017 25.5224 17.8211 24.1244C16.1903 22.8428 14.8368 21.3227 13.6497 19.6306C13.0396 18.7596 12.4627 17.8719 12.0966 16.8622C11.6362 15.6028 11.5751 14.3379 12.0577 13.073C12.3406 12.3241 12.8343 11.7138 13.4112 11.1757C13.8328 10.7873 14.3542 10.7485 14.9311 10.8206Z" stroke="#0E0F0C" stroke-width="1.019" mask="url(#path-2-outside-2_2670_3599)"></path>
                                    </svg>
                                </div>
                                <div className=" font-primary text-text-primary   ">Whatsapp</div>
                                <div className="text-nowrap   text-text-primary font-primaryBold ">+91 707070 1947</div>
                                <div className=" hidden grow">
                                    <div className="relative h-full w-full">
                                        <div className="arrow-bounce absolute -top-[8px]   scale-[0.8] lg:-top-[10px] lg:scale-[1]"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 78
 21" className="h-[19px] w-[76px]"><path stroke="#102713" stroke-linecap="round" stroke-width="2" d="M1.979 10.846h72.599"></path><path stroke="#102713" stroke-width="2" d="M67.408.987c0 5.445 4.582 9.86 10.234 9.86-5.652 0-10.235 4.414-10.235 9.859"></path></svg></div></div></div></div></div>
                        <div className="w-full h-full  rounded-[10px]  duration-500 delay-100 bg-secondary-color   absolute  "></div></div></a>


            </div>
        </div>
    )
}

export default page
