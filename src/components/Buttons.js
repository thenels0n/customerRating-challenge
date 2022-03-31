import React from 'react'
import Button from './Button'



const Buttons = (props) => {


    const ratingElements = props.rate.map((data) => (
        <Button key={data.id} onClick={props.onClick} data={data} />    
    ))


  return (
    <div className='btn-grid'>
        {ratingElements}

    </div>
  )
}

export default Buttons