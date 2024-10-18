import React from 'react'
import {
  Container, List, ListItem, ListItemIcon, ListItemText, Divider, LinearProgress,
} from '@material-ui/core'

import useContactListController from './controller'
import useStyles from './style'

const ContactList = () => {
  const classes = useStyles()
  const {
    onScroll, contactList, ref, loading,
  } = useContactListController()

  return (
    <Container ref={ ref } onScroll={ onScroll } className={ classes.container }>
      <List className={ classes.list }>
        {contactList.map(({ name, image, id }) => (
          <div key={ id }>
            <ListItem classes={ { gutters: classes.listItemGutters } }>
              <ListItemIcon className={ classes.listItemIcon }>
                <img className={ classes.contactImage } alt='N/A' src={ image } />
              </ListItemIcon>
              <ListItemText className={ classes.listText } primary={ name } />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      {loading && <LinearProgress />}
    </Container>
  )
}

export default ContactList
