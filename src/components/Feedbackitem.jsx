import { FaTimes } from 'react-icons/fa'
import React from 'react'
import Card from './Card'
function Feedbackitem({item, handleClick}) {



  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() =>handleClick(item.id)} className='close'>

            <FaTimes color='purple'/>
        </button>
        <div className="text-display"><p>{item.text}</p></div>
    </Card>
  )
}

export default Feedbackitem
       
      




