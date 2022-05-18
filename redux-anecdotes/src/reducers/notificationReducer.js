import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    text: '',
    type: 'normal'
  },
  reducers: {
    notify(state, action) {
      state = { text: action.payload, type: 'normal' }
      return state
    },
    notifyError(state, action) {
      state = { text: action.payload, type: 'error' }
      return state
    }
  }
})

export const { notify } = notificationSlice.actions
export default notificationSlice.reducer