import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { doFilter } from '../../actions/filter'
import './style.scss'

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
        <li className='employees__item' key={employee.id} >
          <Employee employee={employee} />
        </li>
        )
    })
    return (
      <div className='employees'>
        <h2 className='employees__title'>Список сотрудников</h2>
        <form>
          <input className='search' type='text' placeholder='поиск' onChange={this.handleChange} ref='search'/>
        </form>
        <ul className='employees__list'>
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

  const search = state.filter.search
  if (!search) return { employees: state.listEmployees }

  const filtered = state.listEmployees.filter( employee => {
    const re = new RegExp (search.toLowerCase(), 'g')
    const str = `${employee.name} ${employee.surname} ${employee.middleName} ${employee.email} ${employee.skills}`
    return (str.toLowerCase().match(re))
  })

  return {
    employees: filtered
  }
},{
  doFilter
})(ListEmployees)
