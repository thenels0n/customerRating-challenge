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
      <Buttons btnClick={props.btnClick} rate={props.ratings}/>
      <SubmitButton nextPage={props.nextPage} submitClick={props.onSubmit} />
    </div>
  )
}

export default TopPage