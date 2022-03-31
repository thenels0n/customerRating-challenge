import React from 'react'

const SubmitButton = (props) => {
  return (
    <button onClick={ props.nextPage ? props.onClick : ''}  className='submitBtn'>SUBMIT</button>
  )
}

export default SubmitButton