
import React from 'react'
import TypeWriter from './TypeWriter'
import BuildingScalable from './BuildingScalable'

const Hero3 = () => {
    return (
        <div className='mt-14 mx-4 lg:mx-auto'>
            <div className='max-w-[920px] mx-auto flex flex-col'>
                <div className='bg-[#D4B6EC] max-w-[492px] self-start py-8 pl-8 pr-5 md:pr-24 rounded-[10px] border-[#462B34] border-[length:1px_1px_3px_1px]'>
                    <p className='text-[20px] text-[#272727E5] font-generalsans-m leading-[2] tracking-[.01em] '>
                        These are real-world problems that
                        emerging startups throw at
                        candidates they're ready to invest in
                    </p>
                </div>

                <p className='text-end mt-16 text-[#39C988CC] text-[128px] leading-[.75] font-bold font-generalsans-b'>THINK</p>
                <BuildingScalable />
            </div>
        </div>
    )
}

export default Hero3
