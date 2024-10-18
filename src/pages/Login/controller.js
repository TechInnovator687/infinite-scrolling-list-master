import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { loginCredentils } from '../../utils/constants/dummyData'
import * as userState from '../../utils/userState'

const useLoginController = () => {
  const history = useHistory()
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState(false)

  const onChange = (field, { currentTarget: { value } }) => {
    if (field === 'username') setUsername(value)
    else setPassword(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (loginCredentils[ username ] && loginCredentils[ username ].password === password) {
      userState.setKey('isLoggedIn', true)
      history.push('/home')
    } else setError(true)
  }

  return ({
    onChange, onSubmit, error, username, password,
  })
}

export default useLoginController
