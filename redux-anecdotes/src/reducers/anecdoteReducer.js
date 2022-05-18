import { createSlice } from "@reduxjs/toolkit"
import { castVoteService, createNewNote, getAllAnecdotes } from "../services/anecdotes"

const initialState = []

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    upvote(state, action) {
      const index = state.findIndex(anecdote => anecdote.id === action.payload)
      state[index].votes++
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      state = action.payload
      return state
    }
  }
})

export const initializeAnecdote = () => {
  return async dispatch => {
    const data = await getAllAnecdotes()
    dispatch(setAnecdotes(data))
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {
    const data = await createNewNote(content)
    dispatch(appendAnecdote(data))
  }
}

export const castVote = (anecdote) => {
  return async dispatch => {
    const data = await castVoteService(anecdote)
    dispatch(upvote(data.id))
  }
}

export const { upvote, appendAnecdote, setAnecdotes } = blogSlice.actions
export default blogSlice.reducer