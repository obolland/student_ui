import React from 'react';
import {Container} from 'reactstrap';

const AboutPage = () => {

  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4">How To Use This App...</h2>
      <div className=" text-left">
        <ul>
          <li>Use the quick search field to find a student by name, learner id etc etc</li>
          <li>Click the 'Get All Students' button to fetch all students</li>
          <li>Click the 'Filter' button and drag the sliders to filter students by year group.
            Filtering is live and will automatically save your preference when you exit the modal window.
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default AboutPage;