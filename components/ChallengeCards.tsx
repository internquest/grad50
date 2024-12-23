import Image from 'next/image'
import React from 'react'
import cash from '@/public/cash.png'
import gold from '@/public/gold.png'

const ChallengeCards = () => {
    return (
        <div className=' -mt-[100px] z-10 relative mx-4 lg:mx-auto'>
            <div className='bg-white max-w-[80%] md:max-w-[910px] xl:max-w-[1054px] min-h-[475px] mx-auto rounded-[20px] py-4 pt-8 px-5 md:px-10 border-[#462B34] border-[length:2px_2px_7px_2px]'>
                <div className='w-full h-full flex flex-col md:flex-row gap-5'>
                    <div className='flex flex-col gap-4 md:basis-[70%] justify-start'>
                        <div className='text-[#FBE287] mt-3 font-cabiet-black text-[64px] leading-[1] '><span>01</span></div>
                        <p className='text-[18px] leading-[2] tracking-[.02em] font-medium  text-[#462B34E0] font-generalsans-m'>Transform the process of building AI agents by creating a no-code platform
                            that enables users to build functional, and customized AI agents using
                            natural language prompts</p>

                        <div className='md:hidden flex max-sm:flex-col items-start gap-4  justify-center'>
                            <div className='bg-[#FFB65E] w-[215px] rounded-[10px] h-[91px] text-[40px] font-extrabold flex justify-center items-center text-[#462B34] font-cabiet-b'>
                                <span className='leading-[2] font-extrabold'>52 LPA</span>

                            </div>
                            <div className='border border-[#462B34] flex-grow w-[215px] p-5 flex flex-col gap-5 rounded-[10px]'>
                                <div className='flex gap-3 items-center justify-start'>
                                    <div className='w-[20px] h-[20px] rounded-[2px] bg-[#B6ECCC] '></div>
                                    <span className='text-[16px] leading-[2] text-[#462B34]'>12,00,000</span>
                                </div>
                                <div className='flex gap-3 items-center justify-start'>
                                    <div className='w-[20px] h-[20px] rounded-[2px] bg-[#B9C8FF] '></div>
                                    <span className='text-[16px] leading-[2] text-[#462B34]'>12,00,000</span>
                                </div>
                                <div className='flex gap-3 items-center justify-start'>
                                    <div className='w-[20px] h-[20px] rounded-[2px] bg-[#FCB2B2] '></div>
                                    <span className='text-[16px] leading-[2] text-[#462B34]'>6,00,000</span>
                                </div>
                                <div className='flex gap-3 items-center justify-start'>
                                    <div className='w-[20px] h-[20px] rounded-[2px] bg-[#FFF5B7CC] '></div>
                                    <span className='text-[16px] leading-[2] text-[#462B34]'>2,00,000</span>
                                </div>
                                <div className='flex gap-3 items-center justify-start'>
                                    <div className='w-[20px] h-[20px] rounded-[2px] bg-[#E66C61CC] '></div>
                                    <span className='text-[16px] leading-[2] text-[#462B34]'>20,00,000</span>
                                </div>


                            </div>
                        </div>



                        <div className='bg-[#361C24] w-[130px] h-[50px] mt-2 rounded-[5px] flex justify-center items-center text-white font-generalsans-m'>India | Hybrid</div>
                        <div className='flex flex-col items-start gap-4 mt-3'>
                            <p className='text-[#FB9D46] text-[20px] tracking-[.01em] font-bold font-cabiet-m'>First-Year Realized Value</p>
                            <div className='flex gap-4'>
                                <div className='border-[#462B34] border-[length:1px_1px_2px_1px] bg-white rounded-[5px] pl-2 pr-4  flex items-center gap-4'>
                                    <Image src={cash} alt='cash' width={35} height={30} />
                                    <span className='text-[#462B34BF] text-[24px] leading-[2] font-cabiet-b'>17</span>
                                </div>
                                <div className='border-[#462B34] border-[length:1px_1px_2px_1px] bg-white rounded-[5px] pl-2 pr-4  flex items-center gap-4'>
                                    <Image src={gold} alt='gold' width={35} height={30} />
                                    <span className='text-[#462B34BF] text-[24px] leading-[2] font-cabiet-b'>3</span>
                                </div>
                                <div className='border-[#462B34] border-[length:1px_1px_2px_1px] bg-white rounded-[5px] pl-2 pr-4  flex items-center gap-4'>
                                    <Image src={cash} alt='cash' width={35} height={30} />
                                    <span className='text-[#462B34BF] text-[24px] leading-[2] font-cabiet-b'>17</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex md:basis-[30%]  flex-col gap-4 items-center justify-center'>
                        <div className='bg-[#FFB65E] w-[215px] rounded-[10px] h-[91px] text-[40px] font-extrabold flex justify-center items-center text-[#462B34] font-cabiet-b'>
                            <span className='leading-[2] font-extrabold'>52 LPA</span>

                        </div>
                        <div className='border border-[#462B34] flex-grow w-[215px] p-5 flex flex-col gap-5 rounded-[10px]'>
                            <div className='flex gap-3 items-center justify-start'>
                                <div className='w-[20px] h-[20px] rounded-[2px] bg-[#B6ECCC] '></div>
                                <span className='text-[16px] leading-[2] text-[#462B34]'>12,00,000</span>
                            </div>
                            <div className='flex gap-3 items-center justify-start'>
                                <div className='w-[20px] h-[20px] rounded-[2px] bg-[#B9C8FF] '></div>
                                <span className='text-[16px] leading-[2] text-[#462B34]'>12,00,000</span>
                            </div>
                            <div className='flex gap-3 items-center justify-start'>
                                <div className='w-[20px] h-[20px] rounded-[2px] bg-[#FCB2B2] '></div>
                                <span className='text-[16px] leading-[2] text-[#462B34]'>6,00,000</span>
                            </div>
                            <div className='flex gap-3 items-center justify-start'>
                                <div className='w-[20px] h-[20px] rounded-[2px] bg-[#FFF5B7CC] '></div>
                                <span className='text-[16px] leading-[2] text-[#462B34]'>2,00,000</span>
                            </div>
                            <div className='flex gap-3 items-center justify-start'>
                                <div className='w-[20px] h-[20px] rounded-[2px] bg-[#E66C61CC] '></div>
                                <span className='text-[16px] leading-[2] text-[#462B34]'>20,00,000</span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChallengeCards
