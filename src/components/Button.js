import React from 'react'

const Button = (props) => {
  return (
    <button onClick={() => props.onClick (props.data.id)} className={`btn ${ props.data.active ? 'active' : ''}`}>{props.data.rate}</button>
  )
}

export default Button