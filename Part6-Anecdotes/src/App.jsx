import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from './reducers/anecdoteReducer'

import AddAnecdoteForm from './components/AddAnecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = id => {
    // dispatch an action to increment votes in the Redux store
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      
      <AddAnecdoteForm />
    </div>
  )
}

export default App
