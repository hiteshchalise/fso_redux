import { useSelector, useDispatch } from 'react-redux'
import { castVote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { castVoteService } from '../services/anecdotes'

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
  const vote = async (anecdote) => {
    const data = await castVoteService(anecdote)
    dispatch(castVote(data.id))
    dispatch(notify(`vote is casted for ${anecdote.id}`))
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
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}
  </>)
}

export default AnecdoteList