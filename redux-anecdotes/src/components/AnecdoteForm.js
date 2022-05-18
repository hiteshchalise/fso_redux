import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { notify } from "../reducers/notificationReducer"
import { createNewNote } from "../services/anecdotes"
const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const handleNewAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const data = await createNewNote(content)
    dispatch(addAnecdote(data))
    dispatch(notify(`added new anecdote: ${content}`))
    setTimeout(() => dispatch(notify('')), 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm