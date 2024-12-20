'use client'
import React, { useState } from 'react'
import FaqINdividual from './FaqINdividual'

const Faqs = () => {
    const [open, setOpen] = useState<string>("1")
    return (
        <div>
            <FaqINdividual open={open} setOpen={setOpen} id={"1"} />
            <FaqINdividual open={open} setOpen={setOpen} id={"2"} />
            <FaqINdividual open={open} setOpen={setOpen} id={"3"} />
        </div>
    )
}

export default Faqs
