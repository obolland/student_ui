import { Table } from 'reactstrap';
import Stars from '../stars/index';

const StudentDetailTable = ({ studentData }) => {

  return (
    <Table striped bordered className="mt-5">
      <thead className="dark-head">
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Personal Details</th>
          <th>Family / Emergancy Contacts</th>
          <th>SEN</th>
        </tr>
      </thead>
      { studentData && studentData.map(student => {
          return (
              <tbody key={student.pupil_admission_number}>
                <tr>
                  <td>{student.gender === "F" ? 
                        <img className="img-fluid"
                        src="https://i3.lensdump.com/i/ImtfIM.md.png"
                        alt=''/>
                        :
                        <img className="img-fluid"
                        src="https://i2.lensdump.com/i/ImtNUA.md.png"
                        alt=''/>
                      }
                  </td>
                  <td>{student.first_name +' '+ student.last_name}</td>
                  <td>
                    <b>Learner ID:</b> {student.source_id} <br/>
                    <b>Gender:</b> {student.gender === "F" ? "Female" : "Male"} <br/>
                    <b>Year Group:</b> {student.year_code} <br/>
                    <b>Date of birth:</b> {student.dob} <br />
                    <b>First Language:</b> {student.first_language_name} <br />
                    <b>address:</b> {student.address_line_1 +', '+ student.town_city +', '+ student.postcode}
                  </td>
                  <td>
                    {
                      student.emergency_contacts.map(contact => {
                        return (
                          <ul key={contact.ContactId}>
                            <li>{contact.first_name}{" "}{contact.last_name} - {contact.Description}</li>
                          </ul>
                        )
                      })
                    }
                  </td>
                  <td>
                    {
                      student.SENProvisionDetails.map(sen => {
                        return (
                          <div key={sen.ProvisionId}>
                            <b>Provision ID - </b>{sen.ProvisionId}<br/>
                            <b>Provision Code - </b>{sen.ProvisionTypeCode} <br/>
                            <Stars starsAwarded={student.SENStarsAwarded} provisionId={sen.ProvisionId}/>
                          </div>
                        )
                      })
                    }
                  </td>
                </tr>
              </tbody>
          )
        })
      }
    </Table>
  )
}

export default StudentDetailTable;