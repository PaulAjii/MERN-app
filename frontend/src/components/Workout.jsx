import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Workout = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if(!user) return
    
    const { _id: id } = workout
    const response = await fetch(`http://localhost:5000/api/v1/workouts/${ id }`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const jsonData = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: jsonData })
    }
  }

  return (
    <div className="workout-details">
      <h4>{ workout.title }</h4>
      <p><strong>Load (kg): </strong>{ workout.load }</p>
      <p><strong>Reps: </strong>{ workout.reps }</p>
      <p>{ formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true }) }</p>
      <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default Workout