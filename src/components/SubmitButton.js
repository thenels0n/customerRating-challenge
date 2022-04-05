import React from 'react'

const SubmitButton = (props) => {
  return (
    <button onClick={ props.nextPage ? props.submitClick : ''}  className='submitBtn'>SUBMIT</button>
  )
}

export default SubmitButton