import React, { Fragment, useEffect } from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { useDispatch } from 'react-redux'
import { CHANGE_TITLE } from '../reducer'

const FormUserDetails = ({ nextStep, prevStep, values, handleChange }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: CHANGE_TITLE, title: 'Enter Personal Details' })
  }, [])

  const proceed = e => {
    e.preventDefault()
    nextStep()
  }

  const back = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <Fragment>
      <TextField
        hintText="Enter Your Occupation"
        floatingLabelText="Occupation"
        onChange={handleChange}
        defaultValue={values.occupation}
        name="occupation"
      />
      <br />

      <TextField
        hintText="Enter Your City"
        floatingLabelText="City"
        onChange={handleChange}
        defaultValue={values.city}
        name="city"
      />
      <br />

      <TextField
        hintText="Enter Your Bio"
        floatingLabelText="Bio"
        onChange={handleChange}
        defaultValue={values.bio}
        name="bio"
      />
      <br />

      <RaisedButton
        label="Continue"
        primary
        style={styles.button}
        onClick={proceed}
      />
      <RaisedButton label="Back" style={styles.button} onClick={back} />
    </Fragment>
  )
}

const styles = {
  button: {
    margin: 15,
  },
}

export default FormUserDetails
