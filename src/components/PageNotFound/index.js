import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
//import './style.scss'

class PageNotFound extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div >
        <Link to='/'>На главную</Link>
      </div>
    )
  }
}

export default PageNotFound
