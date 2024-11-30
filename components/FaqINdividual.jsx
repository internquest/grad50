'use client'
import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

import { createSvgIcon } from '@mui/material/utils';




const PlusIcon = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"

        viewBox="0 0 24 24"
        strokeWidth={1.5}
    >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
    </svg>,
    'Plus',
);
const MinusIcon = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"

        viewBox="0 0 24 24"
        strokeWidth={1.5}
    >
        <path d="M19 13H5v-2h14z"></path>
    </svg>,
    'Plus',
);

const Icon = ({ icon }) => {
    return (
        <div class="flex-center justify-center  h-[35px] w-[35px] rounded bg-[#cfd4d0] md:h-[28px] md:w-[28px]">
            {icon}
        </div>
    )
}





const FaqINdividual = ({ question, solution, identity }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <li class={`m-0 p-[15px] ${expanded === identity && '!bg-[#fffef8]'}  !bg-[#f7f6ed]  box-border flex flex-col mb-[8px] rounded-[8px]  border-[1px] border-[solid]`}>


                <Accordion expanded={expanded === identity} onChange={handleChange(identity)}  >
                    <AccordionSummary



                        aria-controls={`${identity}-content`}
                        id={`${identity}-header`}
                    >


                        <button type="button" fdprocessedid="9fizo" class="font-[LabilGrotesk,_sans-serif] text-[18px] leading-[120%] m-0 overflow-visible normal-case [appearance:button] p-0 box-border font-medium tracking-[0px] text-[rgb(43,_55,_74)] flex items-center justify-between text-left bg-none w-full   border-[none] cursor-pointer">
                            <h3 class="m-0 p-0 box-border mr-[8px] font-semibold text-[18px] leading-[120%] tracking-[0px]">Why Venga, and what is Venga's goal?</h3>
                            <div class={`m-0 p-0 box-border w-[33px] h-[33px] min-w-[33px] min-h-[33px] rounded-[50%] ${expanded === identity && '!bg-[#cbea00] -rotate-180'} bg-[rgb(236,_235,_228)] flex items-center justify-center [transition:transform_0.2s,_-webkit-transform_0.2s]`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="m-0 p-0 box-border">
                                    <path fill="#fff" d="M17.951 8.928a.93.93 0 0 0-1.344 0l-4.704 4.704-4.8-4.704a.93.93 0 0 0-1.344 0 .93.93 0 0 0 0 1.344l5.472 5.472a.93.93 0 0 0 1.344 0l5.376-5.472a.93.93 0 0 0 0-1.344" class="m-0 p-0 box-border fill-[rgb(17,_26,_41)]"></path>
                                </svg>
                            </div>
                        </button>

                    </AccordionSummary>
                    <AccordionDetails className=' '>

                        <div class="m-0 p-0 box-border overflow-hidden h-auto">
                            <p class="m-0 p-0 box-border font-[LabilGrotesk,_sans-serif] font-medium text-[16px] leading-[130%] tracking-[0.01em] text-[rgb(43,_55,_74)] mt-[15px] mr-[113px]">"Venga" is a commonly used Spanish word and verb that means "come on" or "let's go," often used for encouragement or agreement.</p>
                            <p class="m-0 p-0 box-border font-[LabilGrotesk,_sans-serif] font-medium text-[16px] leading-[130%] tracking-[0.01em] text-[rgb(43,_55,_74)] mt-[15px] mr-[113px]">Venga was launched in Spain, and the core team is based in Barcelona. So, the name "Venga" is a symbolic representation of where the idea was born and where the team is from, at the same time as just sounding awesome in every language.</p>
                        </div>

                    </AccordionDetails>
                </Accordion>
            </li>



        </>
    )
}

export default FaqINdividual
