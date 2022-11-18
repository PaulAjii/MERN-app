import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import Workout from '../components/Workout'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/v1/workouts/')
      const jsonData = await response.json()

      if(response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: jsonData })
      }
    }

    fetchData()
  }, [dispatch])

  return (
    <section className='home'>
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <Workout key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </section>
  )
}

export default Home