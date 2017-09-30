import React, { Component } from 'react'

import styled from 'styled-components'

import waterBg from '../../images/water-image.png'

import CompanyList from './CompanyList'
import CompanyFilter from './CompanyFilter'

const jsonData = require('../../dealers.json')

export class Content extends Component {
  constructor(props) {
    super()
    this.state = {
      list: [],
      filters: {
        service: false,
        installation: false,
        residential: false,
        commercial: false
      }
    }
  }
  componentDidMount() {
    this.setState({
      list: jsonData.dealers
    })
  }
  onChange(name) {
    if (name === 'service') {
      this.setState({
        filters: {
          service: !this.state.filters.service
        }
      }, this.updateData)
    } else if (name === 'installation') {
      this.setState({
        filters: {
          installation: !this.state.filters.installation
        }
      }, this.updateData)
    } else if (name === 'residential') {
      this.setState({
        filters: {
          residential: !this.state.filters.residential
        }
      }, this.updateData)
    } else if (name === 'commercial') {
      this.setState({
        filters: {
          commercial: !this.state.filters.commercial
        }
      }, this.updateData)
    }
  }
  updateData() {
    const data = jsonData.dealers
    // const { service, installation, residential, commercial } = this.state.filters
    let filteredData = []
    data.map((item, idx) => {
      Object.keys(this.state.filters).map((value) => {
        let formatedArr = data[idx].data.certifications.join(' ').toLowerCase().split(' ')
        if (formatedArr.indexOf(value) !== -1) {
          filteredData.push(data[idx])
        }
      })
    })
    this.setState({
      list: filteredData
    })
  }
  render() {
    const { filters, list } = this.state
    return (
      <Wrap>
        <CompanyFilter filters={ filters } result="25" onChange={ this.onChange.bind(this) } />
        <CompanyList data={ list } />
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  padding-top: 199px;
  background-image: url(${waterBg});
  background-repeat: no-repeat;
  background-position: top center;
`

export default Content
