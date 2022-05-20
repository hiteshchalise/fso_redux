import { connect } from "react-redux"

let Notification = ({ notification }) => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    color: notification.type === 'error' ? 'red' : 'blue',
    display: notification.text === '' ? 'none' : ''
  }
  return (
    <div style={style}>
      {notification.text}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

Notification = connect(mapStateToProps)(Notification)

export default Notification