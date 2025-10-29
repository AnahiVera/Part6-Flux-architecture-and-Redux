import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'


const AddAnecdoteForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
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