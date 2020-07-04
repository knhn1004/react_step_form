import React, { Fragment, useEffect } from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { useDispatch } from 'react-redux'
import { CHANGE_TITLE } from '../reducer'

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: CHANGE_TITLE, title: 'Enter User Details' })
  }, [])

  const proceed = e => {
    e.preventDefault()
    nextStep()
    console.log('test')
  }

  return (
    <Fragment>
      <TextField
        hintText="Enter Your First Name"
        floatingLabelText="First Name"
        onChange={handleChange}
        defaultValue={values.firstName}
        name="firstName"
      />
      <br />

      <TextField
        hintText="Enter Your Last Name"
        floatingLabelText="Last Name"
        onChange={handleChange}
        defaultValue={values.lastName}
        name="lastName"
      />
      <br />

      <TextField
        hintText="Enter Your Email"
        floatingLabelText="Email"
        onChange={handleChange}
        defaultValue={values.email}
        name="email"
      />
      <br />

      <RaisedButton
        label="Continue"
        primary={true}
        style={styles.button}
        onClick={proceed}
      />
    </Fragment>
  )
}

const styles = {
  button: {
    margin: 15,
  },
}

export default FormUserDetails
