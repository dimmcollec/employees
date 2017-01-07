import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteEmployee } from '../../actions/listEmployees'
import { editEmployee, confirmEditEmployee } from '../../actions/editor'
//import './style.scss'

class Employee extends Component {
  static propTypes = {
    employee: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      surname: PropTypes.string,
      middleName: PropTypes.string,
      email: PropTypes.string,
      skills: PropTypes.string
    }),
    editable: PropTypes.string,
    idEdit: PropTypes.number,
    deleteEmployee: PropTypes.func,
    editEmployee: PropTypes.func,
    confirmEditEmployee: PropTypes.func
  }

  componentDidMount() {
    const { editEmployee, employee } = this.props
    const { name, surname, middleName, email, skills} = this.refs

    window.addEventListener('keydown', (ev) => {
      if (ev.keyCode === 13 || ev.keyCode === 27) {
        editEmployee('', employee.id)
      }
    });
  }

  render() {
    const { employee, editable, idEdit } = this.props

    return (
      <div >
        {(editable === 'name' && idEdit === employee.id)
          ? <input type='text' defaultValue={employee.name} onChange={this.changeHandle} data-name='name'/>
          : <span onClick={this.editHandle} data-name='name' >{ employee.name } </span>
        }
        {(editable === 'surname' && idEdit === employee.id)
          ? <input type='text' defaultValue={employee.surname} onChange={this.changeHandle} data-name='surname'/>
          : <span onClick={this.editHandle} data-name='surname' >{ employee.surname } </span>
        }
        {(editable === 'middleName' && idEdit === employee.id)
          ? <input type='text' defaultValue={employee.middleName} onChange={this.changeHandle} data-name='middleName'/>
          : <span onClick={this.editHandle} data-name='middleName' >{ employee.middleName } </span>
        }
        {(editable === 'email' && idEdit === employee.id)
          ? <input type='text' defaultValue={employee.email} onChange={this.changeHandle} data-name='email'/>
          : <span onClick={this.editHandle} data-name='email' >{ employee.email } </span>
        }
        {(editable === 'skills' && idEdit === employee.id)
          ? <input type='text' defaultValue={employee.skills} onChange={this.changeHandle} data-name='skills'/>
          : <span onClick={this.editHandle} data-name='skills'>{ employee.skills } </span>
        }
        <button type='button' onClick={this.deleteHandle}>Удалить</button>
      </div>
    )
  }

  deleteHandle = ev => {
    ev.preventDefault()
    const { deleteEmployee, employee } = this.props
    deleteEmployee(employee.id)
  }

  editHandle = ev => {
    ev.preventDefault()
    const { editEmployee, employee } = this.props
    editEmployee(ev.currentTarget.getAttribute('data-name'), employee.id)
  }

  changeHandle = ev => {
    const { confirmEditEmployee, employee } = this.props
    confirmEditEmployee(employee.id, ev.currentTarget.getAttribute('data-name'), ev.currentTarget.value )
  }
}

export default connect( state => ({
  editable: state.editor.editable,
  idEdit: state.editor.idEdit
}), {
  deleteEmployee,
  editEmployee,
  confirmEditEmployee
})(Employee)
