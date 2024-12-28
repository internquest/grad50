import React from 'react'
import Marquee from "react-fast-marquee";
import Marqindiv from './Marqindiv';

import { marqCards } from './Stickycard'
const Marqueecards = ({ marqCards }: { marqCards: marqCards[] }) => {

  return (

    <Marquee className='py-3 xl:py-14'>


      {
        marqCards.map((card, index) => { return (<Marqindiv key={index} index={index} text={card.text} bgcolor={card.bgcolor} fillcolor={card.fillcolor} />) })
      }
      {/* <Marqindiv text={} fillcolor={} bgcolor={}/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/> */}
    </Marquee>
  )
}

export default Marqueecards
