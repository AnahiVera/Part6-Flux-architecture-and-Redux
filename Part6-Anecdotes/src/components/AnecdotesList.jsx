import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const AnecdotesList = () => {

    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = id => {
        // dispatch an action to increment votes in the Redux store
        dispatch(voteAnecdote(id))
    }

    // sort locally (descending by votes) to avoid dispatching during render
    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

    return (
        <div>
            {sortedAnecdotes.map(anecdote => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default AnecdotesList