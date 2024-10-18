const setKey = (key, data) => localStorage.setItem(key, data)

const isLoggedIn = () => localStorage.getItem('isLoggedIn')

export { setKey, isLoggedIn }
