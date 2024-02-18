import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
 const [ error, setError ] = useState(null)
 const [ isLoading, setIsLoading ] = useState(null)

 const { dispatch } = useAuthContext()

 const signup = async (email, password) => {
  setIsLoading(true)
  setError(null)

  const response = await fetch('https://exercise-reps.onrender.com/api/v1/users/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  })
  const jsonData = await response.json()

  if (!response.ok) {
    setIsLoading(false)
    setError(jsonData.error)
  }

  if (response.ok) {
    // save the user to localStorage
    localStorage.setItem('user', JSON.stringify(jsonData))

    // update AuthContext
    dispatch({ type: 'LOGIN_USER', payload: jsonData })

    setIsLoading(false)
  }
 }

 return { signup, isLoading, error }
}