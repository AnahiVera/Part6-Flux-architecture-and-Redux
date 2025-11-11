import { useDispatch } from 'react-redux'
import { showNotification } from '../reducers/notificationReducer'

import { appendAnecdote } from '../reducers/anecdoteReducer'

const AddAnecdoteForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(appendAnecdote(content))
        dispatch(showNotification(`You created '${content}'`, 4))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="anecdote"> Add new </label>
            <input name="anecdote" />
            <button type="submit">add</button>

        </form>
    )
}

export default AddAnecdoteForm