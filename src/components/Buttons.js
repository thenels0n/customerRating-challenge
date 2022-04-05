import React from 'react'
import Button from './Button'



const Buttons = (props) => {


    const ratingElements = props.rate.map((data) => (
        <Button key={data.id} onClick={props.btnClick} data={data} />    
    ))


  return (
    <div className='btn-grid'>
        {ratingElements}

    </div>
  )
}

export default Buttons