'use client'
import React, { useState } from 'react'
import FaqINdividual from './FaqINdividual'

const Faqs = ({ firsthover, secondhover }: { firsthover: boolean, secondhover: boolean }) => {
    const [open, setOpen] = useState<string>("1")


    const combinedfaqs = firsthover ? [
        {
            question: "BENEFITS",
            answer: ['All-inclusive package', 'Save up to 50% of resource cost', 'Complete transparency on salary to candidates', 'Recruit Top 5% of Indian IT talent', 'Flexibility on contract (Min. 4 months)', 'Recognised as employee of the your company in Linkedin', 'Commitment to a Single Client Focus', 'Cool Offices Located Across India']
        },
        {
            question: "SEAMLESS PORTAL",
            answer: ['Discover HR-vetted candidates',
                'Hire from Hackathons',
                'Recorded Interviews',
                'Manage Employees & Contracts',
                'Manage Leaves and Attendance',
                'Oversee Payments',
                'Control Cyber Security & Applications (Min. 5 members)',
                'Asset Management']
        },
        {
            question: 'COMPLIANCE COVERED',
            answer: ['Employee Provident Fund (EPF)',
                'Employee State Insurance (ESI)',
                'Professional Tax',
                'Tax Deducted at Source (TDS)',
                'Payroll Compliance',
                'Sexual Harassment Prevention',
                'Contract Labour Regulations',
                'Equal Remuneration',
                'Health Insurance']
        }
    ] :
        [
            {
                question: "BENEFITSadd",
                answer: ['All-inclusive package', 'Save up to 50% of resource cost', 'Complete transparency on salary to candidates', 'Recruit Top 5% of Indian IT talent', 'Flexibility on contract (Min. 4 months)', 'Recognised as employee of the your company in Linkedin', 'Commitment to a Single Client Focus', 'Cool Offices Located Across India']
            },
            {
                question: "SEAMLESS PORTAL",
                answer: ['Discover HR-vetted candidates',
                    'Hire from Hackathons',
                    'Recorded Interviews',
                    'Manage Employees & Contracts',
                    'Manage Leaves and Attendance',
                    'Oversee Payments',
                    'Control Cyber Security & Applications (Min. 5 members)',
                    'Asset Management']
            },
            {
                question: 'COMPLIANCE COVERED',
                answer: ['Employee Provident Fund (EPF)',
                    'Employee State Insurance (ESI)',
                    'Professional Tax',
                    'Tax Deducted at Source (TDS)',
                    'Payroll Compliance',
                    'Sexual Harassment Prevention',
                    'Contract Labour Regulations',
                    'Equal Remuneration',
                    'Health Insurance']
            }
        ]
    // console.log(combinedfaqs);

    return (
        <div>

            {
                combinedfaqs.map((faqanser, index) =>
                    (<FaqINdividual open={open} setOpen={setOpen} id={(index + 1).toString()} question={faqanser.question} answer={faqanser.answer} />))
            }
            {/* // <FaqINdividual open={open} setOpen={setOpen} id={"1"} />
            // <FaqINdividual open={open} setOpen={setOpen} id={"2"} />
            // <FaqINdividual open={open} setOpen={setOpen} id={"3"} /> */}
        </div>
    )
}

export default Faqs
