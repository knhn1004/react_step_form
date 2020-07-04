import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'

const UserForm = () => {
  const [step, setStep] = useState(1)
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  })

  const nextStep = () => {
    setStep(step + 1)
    console.log(step)
  }

  const prevStep = () => {
    setStep(step - 1)
    console.log(step)
  }

  const handleChange = e => {
    e.persist()
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      )
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
	  prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      )
    case 3:
      return <h1>Confirm</h1>
    case 4:
      return <h1>Success</h1>
    default:
      return null
  }
}

export default UserForm
