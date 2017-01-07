import React, { Component, PropTypes } from 'react'
import './style.scss'

class App extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div >
        {this.props.children}
      </div>
    )
  }
}

export default App
