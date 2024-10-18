import Login from '../pages/Login'
import ContactList from '../pages/ContactList'

const routesList = [ {
  path: '/login',
  component: Login,
  isAuth: false,
}, {
  path: '/home',
  component: ContactList,
  isAuth: true,
} ]

export default routesList
