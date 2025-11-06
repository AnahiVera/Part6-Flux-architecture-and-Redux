
//components
import AddAnecdoteForm from './components/AddAnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'


const App = () => {


  return (
    <div>

      <h2>create new</h2>
      <AddAnecdoteForm />

      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesList />

      <Notification />

    </div>
  )
}

export default App
