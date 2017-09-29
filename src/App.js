import React, { Component } from 'react'
import 'flexboxgrid/dist/flexboxgrid.css'

import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
