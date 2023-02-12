import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: workoutsDiapatch } = useWorkoutsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout
    dispatch({ type: 'LOGOUT_USER'})
    workoutsDiapatch({ type: 'SET_WORKOUTS', payload: null})
  }

  return { logout }
}