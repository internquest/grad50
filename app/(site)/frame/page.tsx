import ChallengeCards from '@/components/ChallengeCards'
import ChallengeInfo from '@/components/ChallengeInfo'
import Hero2 from '@/components/Hero2'
import Hero3 from '@/components/Hero3'
import Heromain from '@/components/Heromain'
import React from 'react'

const page = () => {
    return (
        <div>
            <Heromain />
            <div className='pb-20'>
                <Hero2 />
                <Hero3 />
            </div>
            <ChallengeInfo />
            {/* <ChallengeCards /> */}

        </div>
    )
}

export default page
