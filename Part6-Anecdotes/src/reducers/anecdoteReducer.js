import { createSlice, current } from '@reduxjs/toolkit'



const getId = () => (100000 * Math.random()).toFixed(0)






const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action){
      const { content, author, url } = action.payload
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


export const { createAnecdote, voteAnecdote, setAcnecdotes} = anecdoteSlice.actions

export default anecdoteSlice.reducer
