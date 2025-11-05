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

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE': {
      const id = action.data.id
      // return new state with updated votes for the anecdote with matching id
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : { ...anecdote, votes: anecdote.votes + 1 }
      )
    }
    case 'NEW_ANECDOTE': {
      return [...state, action.data]
    }
   
    default:
      return state
  }
}

// action creator for voting an anecdote
export const voteAnecdote = id => {
  return {
    type: 'VOTE',
    data: { id }
  }
}


// action creator for new anecdote
export const createAnecdote = content => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}






export default reducer
