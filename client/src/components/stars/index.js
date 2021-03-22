import React, {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
const Stars = ({ starsAwarded }) => {
  const [state, setState] = useState({rating: starsAwarded})
 
  const onStarClick = (nextValue) => {
    setState({rating: nextValue});
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