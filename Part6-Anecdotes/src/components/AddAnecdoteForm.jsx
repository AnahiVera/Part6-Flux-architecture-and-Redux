import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

import anecdoteService from '../services/anecdotes'

const AddAnecdoteForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value

        const newAnecdote = await anecdoteService.createAnecdote(content)
        dispatch(createAnecdote(newAnecdote))


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