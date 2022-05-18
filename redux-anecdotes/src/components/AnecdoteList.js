import { useSelector, useDispatch } from 'react-redux'
import { castVote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    const filter = state.filter
    const filteredList = state.anecdotes.filter(anecdote => {
      return anecdote.content.includes(filter)
    })
    filteredList.sort((a, b) => b.votes - a.votes)
    return filteredList
  })
  const dispatch = useDispatch()
  const vote = (id) => {
    dispatch(castVote(id))
    dispatch(notify(`vote is casted for ${id}`))
    setTimeout(() => dispatch(notify('')), 3000)
  }
  return (<>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
  </>)
}

export default AnecdoteList