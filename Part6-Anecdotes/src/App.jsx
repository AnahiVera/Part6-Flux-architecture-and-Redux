
//components
import AddAnecdoteForm from './components/AddAnecdoteForm'
import Anecdotes from './components/Anecdotes'


const App = () => {
  

  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
     
      <h2>create new</h2>
      <AddAnecdoteForm />

    </div>
  )
}

export default App
