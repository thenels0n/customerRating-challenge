import React from 'react'
import illustrationIcon from '../images/illustration-thank-you.svg';


const ThankYou = (props) => {
  return (
    <div className='thank-you'>
        <img src={illustrationIcon} alt="" />
        <h6>You selected {props.id} out of 5 </h6>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time 
            to give a rating. If you ever need more support, 
            don't hesitate to get in touch
        </p>
    </div>
  )
}

export default ThankYou