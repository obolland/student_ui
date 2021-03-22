import React, {useState} from 'react';
import BaseLayout from '../../layouts/baseLayout';
import axios from 'axios';
import StudentDetailTable from '../../components/table';
import {Button, Container, Row} from 'reactstrap';
import FilterModal from '../../components/modal';

const HomePage = () => {
  const [studentData, setStudentData] = useState()
  const [formData, setFormData] = useState({search: ''});
  const [sliderState, setSliderState] = useState({value: [3, 12]})
 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:9000/getStudentsSearch', formData)
    .then(res => {
      setStudentData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value })
  }

  const getAllStudents = () => {
    axios.get('http://localhost:9000/getAllStudents')
    .then(res => {
      setStudentData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <BaseLayout title="STUDENT DATA" handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}>
      <Container>
        <Row>
          <Button className="ml-3 mr-1" color="primary" onClick={getAllStudents}>Get All Students</Button>
          <FilterModal buttonLabel="Filter" setSliderState={setSliderState} sliderState={sliderState}/>
        </Row>
        <StudentDetailTable studentData={studentData} sliderState={sliderState} />
      </Container>
    </BaseLayout>
  )
}

export default HomePage