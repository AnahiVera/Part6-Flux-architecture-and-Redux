import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const getId = () => (100000 * Math.random()).toFixed(0)



const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action){
      const { content } = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0
      })
    },
    voteAnecdote(state, action) {
  const id = action.payload
  const anecdoteToChange = state.find(anecdote => anecdote.id === id)
  if (!anecdoteToChange) {
    return state // id not found, do nothing
  }

  const changedAnecdote = {
    ...anecdoteToChange,
    votes: anecdoteToChange.votes + 1
  }

  return state.map(anecdote =>
    anecdote.id !== id ? anecdote : changedAnecdote
  )
},
    
 setAnecdotes(state, action) {
      return action.payload
    }

  }
})

// action creator for using server datas/actions
const { createAnecdote, voteAnecdote, setAnecdotes  } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createAnecdote(content)
    dispatch(createAnecdote(newAnecdote))
  }
}

// actualizar (votar) una anécdota
export const updateAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const returnedAnecdote = await anecdoteService.updateAnecdote(
      anecdote.id,
      updatedAnecdote
    )
    dispatch(voteAnecdote(returnedAnecdote))
  }
}




export default anecdoteSlice.reducer
