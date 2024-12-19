import React from 'react'

const ChallengeInfo = () => {
    return (
        <div>
            <div className='mx-auto relative max-w-[1280px] bg-[#FFC682] rounded-[20px] h-[600px] p-4 '>
                <div className='  border-dotted border-[10px] p-4 rounded-[20px] border-[#462B34] h-full'>
                    <div className='bg-[#462B34] flex flex-col items-center h-full'>
                        <p className='text-[19px] leading-[2] mx-auto text-[#F8F6F7] mt-28 tracking-[.01em] text-center font-generalsans-r max-w-[620px]'>
                            We know you're tired of the usual "join our course, get into FAANG"
                            promises. Let's cut through the noise and show you real opportunities
                            that could transform your career trajectory. Here are some exclusive
                            hiring challenges that could land you those dream packages you've
                            been hearing about.
                        </p>
                        <div className=' m-4 mt-20 w-[90%]'>
                            <div className='linebg  h-[2px] w-full'></div>
                        </div>
                    </div>
                </div>
                {/* <div className='absolute top-[80%] w-[80%] left-[0%] h-[300px] bg-white'></div> */}
            </div>
        </div>
    )
}

export default ChallengeInfo
