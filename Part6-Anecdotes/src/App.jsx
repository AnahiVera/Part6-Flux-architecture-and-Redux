
//components
import AddAnecdoteForm from './components/AddAnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'


const App = () => {


  return (
    <div>

      <h2>create new</h2>
      <AddAnecdoteForm />

  <h2>Anecdotes</h2>
  <Filter />
  <AnecdotesList />

    </div>
  )
}

export default App
