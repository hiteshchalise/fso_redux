import { connect } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

let Filter = ({ dispatch }) => {

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value))
  }

  return (<div style={{ margin: '1em 0' }}>
    <label htmlFor="filter-input" >filter</label>
    <input id="filter-input" type='text' onChange={handleFilterChange} />
  </div>)
}

Filter = connect()(Filter)

export default Filter