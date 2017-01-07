import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import './style.scss'

import { addEmployee } from '../../actions/listEmployees'

class Form extends Component {
  static propTypes = {
    addEmployee: PropTypes.func
  }

  render() {
    return (
      <form className='form'>
        <fieldset>
          <legend>
            Форма добавления сотрудника
          </legend>
          <ul className='form__list'>
            <li><input className='form__input' type='text' placeholder='имя' ref='name'/></li>
            <li><input className='form__input' type='text' placeholder='фамилия' ref='surname'/></li>
            <li><input className='form__input' type='text' placeholder='отчество' ref='middleName'/></li>
            <li><input className='form__input' type='e-mail' placeholder='e-mail' ref='email'/></li>
            <li><input className='form__input' type='text' placeholder='навыки' ref='skills'/></li>
          </ul>
          <button className='form__submit' type='submit' onClick={this.addClick}>Добавить</button>
        </fieldset>

      </form>
    )
  }
  addClick = ev => {
    ev.preventDefault()
    const { addEmployee } = this.props
    const { name, surname, middleName, email, skills} = this.refs
    if(name.value === '' || surname.value === '' ||  middleName.value === '' ||  email.value === '' || skills.value === '') {
      alert('заполните все поля')
      return
    }
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
