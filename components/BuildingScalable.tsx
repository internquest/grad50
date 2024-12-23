'use client'
import React, { useEffect, useRef, useState } from 'react'
import TypeWriter from './TypeWriter'
import { useInView } from 'framer-motion';

const BuildingScalable = () => {
    const ref = useRef(null)
    const [startTyping, setStartTyping] = useState(false);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            setStartTyping(true);
        }
    }, [isInView]);
    return (
        <div ref={ref} className='bg-white rounded-[10px] p-10 font-cabiet-m text-[#FF7452] text-[26px] md:text-[48px] tracking-[.01em]'>
            {startTyping &&
                <TypeWriter text='building scalable systems' />
            }
            {/* <TypeWriter text='building scalable systems' /> */}

        </div>
    )
}

export default BuildingScalable
