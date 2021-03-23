import React, {useState, useEffect} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
 
const Stars = ({ starsAwarded, provisionId }) => {
  const [state, setState] = useState({rating: starsAwarded, provisionId: provisionId})
 
  const onStarClick = (nextValue) => {
    setState({...state, rating: nextValue})
  }

  useEffect(() => {
    axios.post('http://localhost:9000/writeStars', state)
    .then(res => {
      console.log(res)
    })
  }, [state])
    
    return (                
      <div>
        <h4>Number of stars: {state.rating}</h4>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={state.rating}
          onStarClick={onStarClick}
        />
      </div>
    );
  }
 
export default Stars