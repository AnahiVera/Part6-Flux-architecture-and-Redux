
//components
import AddAnecdoteForm from './components/AddAnecdoteForm'
import AnecdotesList from './components/AnecdotesList'


const App = () => {
  

  
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdotesList />
     
      <h2>create new</h2>
      <AddAnecdoteForm />

    </div>
  )
}

export default App
