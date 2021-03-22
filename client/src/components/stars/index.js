import React, {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
 
const Stars = ({ starsAwarded, provisionId }) => {
  const [state, setState] = useState({rating: starsAwarded, provisionId: provisionId})
 
  const onStarClick = (nextValue) => {
    setState({rating: nextValue});

    axios.post('http://localhost:9000/writeStars', state)
    .then(res => {
      console.log(res)
    })
  }
    
    return (                
      <div>
        <h4>Rating from state: {state.rating}</h4>
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