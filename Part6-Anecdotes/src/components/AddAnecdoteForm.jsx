import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AddAnecdoteForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
       
        dispatch(createAnecdote(content))
        dispatch(setNotification(`You created '${content}'`))
        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000)
         event.target.anecdote.value = ''
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