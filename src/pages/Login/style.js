import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    width: '50%',
    [ theme.breakpoints.down('sm') ]: {
      minWidth: '100%',
    },
  },
  loginCard: {
    [ theme.breakpoints.down('sm') ]: {
      minWidth: '100%',
    },
    width: '50%',
    margin: 'auto',
    textAlign: 'center',
  },
  form: {
    maxWidth: '80%',
    margin: 'auto',
    padding: '30px 0px',
  },
  formFields: {
    marginBottom: '30px',
  },
  formBtn: {

  },
}))

export default useStyles
