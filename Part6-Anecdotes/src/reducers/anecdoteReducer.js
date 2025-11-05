import { createSlice, current } from '@reduxjs/toolkit'


const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action){
      const content = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0
      })
    },
    voteAnecdote (state, action){
      const id = action.payload
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      console.log(current(state))
      if(anecdoteToChange){
        anecdoteToChange.votes++
      }
    }

  }
})


export const { createAnecdote, voteAnecdote} = anecdoteSlice.actions

export default anecdoteSlice.reducer
