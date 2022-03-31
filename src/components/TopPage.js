import React from 'react'
import Header from './Header';
import BodyText from './BodyText';
import Buttons from './Buttons';
import SubmitButton from './SubmitButton';


const TopPage = (props) => {
  return (
    <div>
        <Header />
      <BodyText />
      <Buttons onClick={props.onClick} rate={props.ratings}/>
      <SubmitButton nextPage={props.nextPage} bg='hsl(0, 0%, 100%)' color='hsl(25, 97%, 53%)' onClick={props.onSubmit} />
    </div>
  )
}

export default TopPage