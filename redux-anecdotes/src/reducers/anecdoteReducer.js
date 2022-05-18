import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    castVote(state, action) {
      const index = state.findIndex(anecdote => anecdote.id === action.payload)
      state[index].votes++
    },
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      state = action.payload
      return state
    }
  }
})

export const { castVote, addAnecdote, setAnecdotes } = blogSlice.actions
export default blogSlice.reducer