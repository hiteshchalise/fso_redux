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

export const setNotification = (content, timeout = 5) => {
  return dispatch => {
    dispatch(notify(content))
    setTimeout(() => {
      dispatch(notify(''))
    }, timeout * 1000);
  }
}

export const setErrorNotification = (content, timeout = 5) => {
  return dispatch => {
    dispatch(notifyError(content))
    setTimeout(() => {
      dispatch(notifyError(''))
    }, timeout * 1000)
  }
}
export const { notify, notifyError } = notificationSlice.actions
export default notificationSlice.reducer