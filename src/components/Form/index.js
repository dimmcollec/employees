import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../../actions/listEmployees'
import './style.scss'

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
            <li><input className='form__input' type='text' placeholder='имя' ref='name' required/></li>
            <li><input className='form__input' type='text' placeholder='фамилия' ref='surname' required/></li>
            <li><input className='form__input' type='text' placeholder='отчество' ref='middleName' required/></li>
            <li><input className='form__input' type='e-mail' placeholder='e-mail' ref='email' required/></li>
            <li><input className='form__input' type='text' placeholder='навыки' ref='skills' required/></li>
          </ul>
          <button className='form__submit' type='submit' onClick={this.addHandle}>Добавить</button>
        </fieldset>
      </form>
    )
  }
  addHandle = ev => {
    const { addEmployee } = this.props
    const { name, surname, middleName, email, skills} = this.refs
    if(name.value === '' || surname.value === '' ||  middleName.value === '' ||  email.value === '' || skills.value === '') return

    ev.preventDefault()
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
