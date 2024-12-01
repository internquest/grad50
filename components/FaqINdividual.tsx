'use client'
import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

import { createSvgIcon } from '@mui/material/utils';




// const PlusIcon = createSvgIcon(
//     <svg
//         xmlns="http://www.w3.org/2000/svg"

//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//     >
//         <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
//     </svg>,
//     'Plus',
// );
// const MinusIcon = createSvgIcon(
//     <svg
//         xmlns="http://www.w3.org/2000/svg"

//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//     >
//         <path d="M19 13H5v-2h14z"></path>
//     </svg>,
//     'Plus',
// );

// const Icon = ({ icon }) => {
//     return (
//         <div className="flex-center justify-center  h-[35px] w-[35px] rounded bg-[#cfd4d0] md:h-[28px] md:w-[28px]">
//             {icon}
//         </div>
//     )
// }

type faq = {
    question?: string;
    solution?: string;
    identity: string;
}



const FaqINdividual = ({ question, solution, identity }: faq) => {
    const faqanser = ['All-inclusive package', 'Save up to 50% of resource cost', 'Complete transparency on salary to candidates', 'Recruit Top 5% of Indian IT talent', 'Flexibility on contract (Min. 4 months)', 'Recognised as employee of the your company in Linkedin', 'Commitment to a Single Client Focus', 'Cool Offices Located Across India']
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: Boolean) => {
        // console.log(isExpanded, panel, identity);

        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>



            <Accordion expanded={expanded === identity} onChange={handleChange(identity)}  >
                <AccordionSummary



                    aria-controls={`${identity}-content`}
                    id={`${identity}-header`}
                >


                    <button type="button" className="font-[LabilGrotesk,_sans-serif] text-[18px] leading-[120%] m-0 overflow-visible normal-case [appearance:button] p-0 box-border font-medium tracking-[0px] text-[rgb(43,_55,_74)] flex items-center justify-between text-left bg-none w-full   border-[none] cursor-pointer">
                        <h3 className="m-0 p-0 box-border mr-[8px] font-semibold text-xl py-2 lg:text-[28px] leading-[120%] tracking-[0px] uppercase">Benefits</h3>
                        <div className={`m-0 p-0 box-border w-[33px] h-[33px] min-w-[33px] min-h-[33px] rounded-[50%] ${expanded === identity && '!bg-[#cbea00] -rotate-180'} bg-[rgb(236,_235,_228)] flex items-center justify-center [transition:transform_0.2s,_-webkit-transform_0.2s]`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="m-0 p-0 box-border">
                                <path fill="#fff" d="M17.951 8.928a.93.93 0 0 0-1.344 0l-4.704 4.704-4.8-4.704a.93.93 0 0 0-1.344 0 .93.93 0 0 0 0 1.344l5.472 5.472a.93.93 0 0 0 1.344 0l5.376-5.472a.93.93 0 0 0 0-1.344" className="m-0 p-0 box-border fill-[rgb(17,_26,_41)]"></path>
                            </svg>
                        </div>
                    </button>

                </AccordionSummary>
                <AccordionDetails className=' '>

                    {
                        faqanser.map((faqanser, index) => {
                            return (
                                <div className="text-base lg:text-[22px] flex items-center gap-3 font-primary font-normal my-4 lg:my-7 "><svg width="20" height="20" fill="#B9C8FF" xmlns="http://www.w3.org/2000/svg"><path d="M12.587 12.771a12.21 12.21 0 0 0-2.612 4.078 12.286 12.286 0 0 0-2.748-3.98 11.897 11.897 0 0 0-4.063-2.618A12.211 12.211 0 0 0 7.13 7.503a12.212 12.212 0 0 0 2.609-4.067 11.93 11.93 0 0 0 2.759 3.977 12.582 12.582 0 0 0 4.076 2.602 12.212 12.212 0 0 0-3.987 2.756Z" stroke="#462B34" stroke-width="1.567"></path></svg> <div className="undefined">{faqanser}</div></div>
                            )
                        }
                        )
                    }

                </AccordionDetails>
            </Accordion>




        </>
    )
}

export default FaqINdividual
