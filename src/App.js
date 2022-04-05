import React from 'react';
import TopPage from './components/TopPage';
import ThankYou from './components/ThankYou';
import data from './dataArray'


function App() {

  const [ratings, setRatings] = React.useState(data)
  const [toggle, setToggle] = React.useState(false)
  const [nextPage, setNextPage] = React.useState(false)



    // Click Function
    function btnClick(id) { 
      setRatings(ratings.map((rating) => rating.id === id ? 
        {...rating, active: !rating.active} : rating))

        setNextPage(prevState => !prevState)
      
      }

      // Toggle
      function onSubmit() {
          setToggle(prevState => !prevState)
      }

      const activeRating = ratings.map((rating) => rating.active ? 
      <ThankYou key={rating.id} id={rating.id} /> : '')
 

  return (
    <>
      <div className="container">

        { toggle ? 

          activeRating

        :  

        <TopPage 
          nextPage={nextPage}
          btnClick={btnClick} 
          onSubmit={onSubmit}
          toggle={toggle}
          ratings={ratings} />
        }
      </div>

        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/thenels0n">thenels0n</a>.
        </div>
  </>
  );
}

export default App;
