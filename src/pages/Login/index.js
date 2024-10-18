import React from 'react'
import {
  Container, Card, TextField, Button, Typography,
} from '@material-ui/core'

import useStyles from './style'
import useLoginController from './controller'

const Login = () => {
  const classes = useStyles()
  const { onSubmit, onChange, error } = useLoginController()
  return (
    <Container className={ classes.loginContainer }>
      <Card className={ classes.loginCard }>
        <h1> LOGIN </h1>
        <form onSubmit={ onSubmit } className={ classes.form }>
          <TextField
            onChange={ (e) => onChange('username', e) }
            fullWidth
            className={ classes.formFields }
            placeholder='Username'
          />
          <TextField
            type='password'
            onChange={ (e) => onChange('password', e) }
            fullWidth
            className={ classes.formFields }
            placeholder='Password'
          />
          <Button type='submit'> Log In</Button>
          {error && <Typography variant='subtitle1' gutterBottom color='error'> Invalid Credentials </Typography> }
        </form>
      </Card>
    </Container>
  )
}
export default Login
