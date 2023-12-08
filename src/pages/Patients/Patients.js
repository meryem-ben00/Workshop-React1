import React from 'react'
import Patientspages from './Patientspages';
import PatientsHeader from './PatientsHeader';
import PatientsTable from './PatientsTable';



const Patients = () => {
  return (
    <div className='w-[85%] mx-auto my-[40px]'> 
      <PatientsHeader/>
      <PatientsTable/>
      <Patientspages/>
</div>
  )
}

export default Patients