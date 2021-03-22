const inputData = require('./input_mis_data')

const outputData = inputData.map(student => {
  return {
      "source_id": student.LearnerId,
      "old_source_id": null,
      "pupil_admission_number": student.LearnerCode,
      "first_name": student.Forename.toLowerCase(),
      "legal_first_name": student.LegalForename,
      "middle_name": student.MiddleName,
      "last_name": student.Surname.toLowerCase(),
      "legal_last_name": student.LegalSurname,
      "former_last_name": student.FormerSurname,
      "gender": student.Gender,
      "year_code": student.Year,
      "year_group_source_id": "2018-1718",
      "dob": student.DateOfBirth,
      "upn": student.UPN,
      "former_upn": student.FormerUPN,
      "uln": student.ULN,
      "is_eal": student.EAL,
      "free_meal": student.SchoolLunchTaken,
      "free_meal_6": null,
      "fsm_review_date": null,
      "ethnicity_code": student.Ethnicity,
      "is_pp": false,
      "service_child": student.ServiceChild,
      "looked_after": student.IsLookedAfterorAdoptedFromCare,
      "ever_in_care": student.IsLookedAfterorAdoptedFromCare,
      "sen_category": student.SENProvisionDetails[0].ProvisionTypeCode,
       "enrolment_status": student.EnrolementStatus,
      "address_line_1": student.AddressDetails[0].Number+" "+student.AddressDetails[0].Street,
       "address_line_2": student.AddressDetails[0].Locality,
      "town_city": student.AddressDetails[0].Town,
      "county": student.AddressDetails[0].County,
      "country": student.AddressDetails[0].Country,
      "postcode": student.AddressDetails[0].PostCode,
      "start_date": student.DateOfEntry+" 00:00:00",
      "end_date": student.SENProvisionDetails[0].EndDate,
      "home_language_code": null,
      "home_language_name": null,
      "first_language_code": student.LanguageDetails[0].LanguageCode,
      "first_language_name": student.LanguageDetails[0].Description,
      "proficiency_in_english_code": null,
      "proficiency_in_english_name": null,
      "nationalities": "GBR",
      "country_of_birth": "GBR",
      "photo_hash": null,
      "nhs_number": null,
      "is_pregnant": null,
      "has_emergency_consent": null,
      "emergency_contacts": student.ContactDetails.map(contact => {
        return {
          "first_name": contact.ForeName,
          "last_name": contact.SurName,
          "Description": contact.Description,
          "ContactId": contact.ContactId
        }
      }),
      "SENProvisionDetails": student.SENProvisionDetails.map(contact => {
        return {
          "ProvisionId": contact.ProvisionId,
          "ProvisionTypeCode": contact.ProvisionTypeCode,
          "StartDate": contact.StartDate,
          "ReviewDate": contact.ReviewDate,
          "EndDate": contact.EndDate
        }
      })
  }
})

module.exports = outputData;