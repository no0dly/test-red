import React, { Component } from 'react'

import styled from 'styled-components'

import waterBg from '../../images/water-image.png'

import CompanyList from './CompanyList'
import CompanyFilter from './CompanyFilter'

export class Content extends Component {
  constructor(props) {
    super()
    this.state = {
      filters: {
        service: false,
        installation: false,
        residential: false,
        commercial: false
      }
    }
  }
  render() {
    const { filters } = this.state
    return (
      <Wrap>
        <CompanyFilter filters={ filters } result="25" />
        <CompanyList />
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  padding-top: 199px;
  background-image: url(${waterBg});
  background-repeat: no-repeat;
  background-size: cover;
`

export default Content
