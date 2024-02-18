import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import Workout from '../components/Workout'
import WorkoutForm from '../components/WorkoutForm'
import { useAuthContext } from '../hooks/useAuthContext'

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://exercise-reps.onrender.com/api/v1/workouts/', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const jsonData = await response.json()

      if(response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: jsonData })
      }
    }

    if(user) {
      fetchData()
    }
  }, [dispatch, user])

  return (
    <section className='home'>
    { (!workouts || workouts.length === 0) ?
      <div className="empty">
        There are no workouts here. Add one.
      </div>
         :
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <Workout key={workout._id} workout={workout} />
        ))}
      </div> 
    }
      <WorkoutForm />
    </section>
  )
}

export default Home