import React, {useEffect, useState} from 'react';
import BaseLayout from '../../layouts/baseLayout';
import {Container} from 'reactstrap';
import axios from 'axios';
import StudentDetailTable from '../../components/table';

const HomePage = () => {
  const [studentData, setStudentData] = useState()
  const [formData, setFormData] = useState({search: ''});

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

  // useEffect(() =>{
  //   axios.get('/api/studentData')
  //   .then(function (response) {
  //     console.log(response.data)
  //     setStudentData(response.data)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }, [])

  return (
    <BaseLayout title="STUDENT DATA" handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}>
      <Container>
        <StudentDetailTable studentData={studentData}/>
      </Container>
    </BaseLayout>
  )
}

export default HomePage