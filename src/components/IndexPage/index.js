import React, { Component, PropTypes } from 'react'

import './style.scss'

import Form from '../Form'
import ListEmployees from '../ListEmployees'

class IndexPage extends Component {
  static propTypes = {

  }

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
