import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

//import './style.scss'

import { addEmployee } from '../../actions/listEmployees'

class Form extends Component {
  static propTypes = {
    addEmployee: PropTypes.func
  }

  state = {
    isEmpty: true
  }

  render() {
    return (
      <form>
        <ul>
          <li><input type='text' placeholder='имя' ref='name'/></li>
          <li><input type='text' placeholder='фамилия' ref='surname'/></li>
          <li><input type='text' placeholder='отчество' ref='middleName'/></li>
          <li><input type='text' placeholder='e-mail' ref='email'/></li>
          <li><input type='text' placeholder='навыки' ref='skills'/></li>
        </ul>
        <button type='submit' onClick={this.addClick}>добавить</button>
      </form>
    )
  }
  addClick = ev => {
    ev.preventDefault()
    const { addEmployee } = this.props
    const { name, surname, middleName, email, skills} = this.refs
    addEmployee(name.value, surname.value, middleName.value, email.value, skills.value)
    name.value = ''
    surname.value = ''
    middleName.value = ''
    email.value = ''
    skills.value = ''
  }
}

export default connect(null, {
  addEmployee
})(Form)
