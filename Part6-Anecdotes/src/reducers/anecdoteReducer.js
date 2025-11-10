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
    
 setAcnecdotes(state, action) {
      return action.payload
    }

  }
})

// action creator for using server datas/actions
const { setAcnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAcnecdotes(anecdotes))
  }
}

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createAnecdote(content)
    dispatch(createAnecdote(newAnecdote))
  }
}


export const {  voteAnecdote} = anecdoteSlice.actions

export default anecdoteSlice.reducer
