import React, { Component } from 'react'

import './style.scss'

import Form from '../Form'
import ListEmployees from '../ListEmployees'

class IndexPage extends Component {

  render() {
    return (
      <div className='container'>
        <Form />
        <ListEmployees />
      </div>
    )
  }


}

export default IndexPage
