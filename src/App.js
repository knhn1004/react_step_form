import React, { Fragment } from 'react'
import UserForm from './components/UserForm'
import { MuiThemeProvider } from 'material-ui/styles'
import { AppBar } from 'material-ui'
import { useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'

function App() {
  const title = useSelector(state => state.title)
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title={title} />
	<Container style={{ margin: '0 auto', width: '50%' }}>
          <UserForm />
        </Container>
      </Fragment>
    </MuiThemeProvider>
  )
}

export default App

// https://www.youtube.com/watch?v=zT62eVxShsY
// 31:35
