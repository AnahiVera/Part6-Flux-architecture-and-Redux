import { useSelector, useDispatch } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'


import {updateAnecdote, initializeAnecdotes} from '../reducers/anecdoteReducer'


const AnecdotesList = () => {

    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = anecdote => {
        // dispatch an action to increment votes in the Redux store
       dispatch(updateAnecdote(anecdote))
        dispatch(showNotification(`you voted '${anecdote.content}'`, 4))
      
    }

    // apply text filter (case-insensitive)
    const filtered = filter
        ? anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
        : anecdotes

    // sort locally (descending by votes) to avoid dispatching during render
    const sortedAnecdotes = [...filtered].sort((a, b) => b.votes - a.votes)

    return (
        <div>
            {sortedAnecdotes.map(anecdote => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default AnecdotesList