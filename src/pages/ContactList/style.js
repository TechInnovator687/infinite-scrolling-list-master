import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  contactImage: {
    width: '50px',
    [ theme.breakpoints.down('sm') ]: {
      width: '20px',
    },
  },
  container: {
    height: '90vh',
    overflowY: 'scroll',
    width: '30%',
    margin: 'auto',
    [ theme.breakpoints.down('sm') ]: {
      width: '90%',
    },
  },
  list: {
    width: '90%',
    margin: 'auto',
  },
  listText: {
    textAlign: 'center',
  },
  listItemIcon: {
    [ theme.breakpoints.down('sm') ]: {
      minWidth: 'fit-content',
    },
  },
  listItemGutters: {
    [ theme.breakpoints.down('sm') ]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}))

export default useStyles
