import React from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {
  text?: string;
  className?: string;
}

const OurmissionAbout = (props: Props) => {
  return (
    <div className={twMerge("p-5 md:p-10", props.className)}>{props.text}
    </div>
  )
}

export default OurmissionAbout