import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { doFilter } from '../../actions/filter'
//import './style.scss'

import Employee from '../Emploee'

class ListEmployees extends Component {
  static propTypes = {
    employees: PropTypes.array,
    doFilter: PropTypes.func
  }

  render() {
    const { employees } = this.props

    if (!employees) return null
    const list = employees.map((employee) => {
      return (
        <li key={employee.id} >
          <Employee employee={employee} />
        </li>
        )
    })
    return (
      <div>
        <input type='text' placeholder='поиск' onChange={this.handleChange} ref='search'/>
        <ul>
          { list }
        </ul>
      </div>
    )
  }
  handleChange = () => {
    this.props.doFilter(this.refs.search.value)
  }
}

export default connect( state => {

  const searchStr = state.filter.search
  if (!searchStr) {
    return { employees: state.listEmployees }
  }

  const filtered = state.listEmployees.filter( employee => {
    return (~employee.name.toLowerCase().indexOf(searchStr)
    || ~employee.surname.toLowerCase().indexOf(searchStr)
    || ~employee.middleName.toLowerCase().indexOf(searchStr)
    || ~employee.email.toLowerCase().indexOf(searchStr)
    || ~employee.skills.toLowerCase().indexOf(searchStr)
    )
  })

  return {
    employees: filtered
  }
},{
  doFilter
})(ListEmployees)
