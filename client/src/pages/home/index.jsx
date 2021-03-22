import React, {useEffect, useState} from 'react';
import BaseLayout from '../../layouts/baseLayout';
import {Container} from 'reactstrap';
//import axios from 'axios';
import StudentDetailTable from '../../components/table';

const HomePage = () => {
  const [studentData, setStudentData] = useState()

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
    <BaseLayout title="STUDENT DATA">
      <Container>
        <StudentDetailTable studentData={studentData}/>
      </Container>
    </BaseLayout>
  )
}

export default HomePage