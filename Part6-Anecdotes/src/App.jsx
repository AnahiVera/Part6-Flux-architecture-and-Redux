
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

//components
import AddAnecdoteForm from './components/AddAnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'

//imports
import { setAcnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'


const App = () => {

  const dispatch = useDispatch()

   useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(setAcnecdotes(anecdotes)))
  }, [dispatch])

  /* it is considered good programming practice to add all variables and functions used inside the useEffect hook 
  that are defined within the component to the dependency array. This helps to avoid unexpected bugs. */


  return (
    <div>

      <h2>create new</h2>
      <AddAnecdoteForm />

      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesList />

      <Notification />

    </div>
  )
}

export default App
