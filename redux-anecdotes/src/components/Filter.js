import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = () => {

  const dispatch = useDispatch()

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value))
  }

  return (<div style={{ margin: '1em 0' }}>
    <label htmlFor="filter-input" >filter</label>
    <input id="filter-input" type='text' onChange={handleFilterChange} />
  </div>)
}

export default Filter