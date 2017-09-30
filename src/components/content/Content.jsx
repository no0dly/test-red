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
    let updatedFilters = { ...this.state.filters }
    if (name === 'service') {
      updatedFilters.service = !this.state.filters.service
    } else if (name === 'installation') {
      updatedFilters.installation = !this.state.filters.installation
    } else if (name === 'residential') {
      updatedFilters.residential = !this.state.filters.residential
    } else if (name === 'commercial') {
      updatedFilters.commercial = !this.state.filters.commercial
    }
    this.setState({
      filters: updatedFilters
    }, this.updateData)
  }
  updateData() {
    const data = jsonData.dealers
    // const { service, installation, residential, commercial } = this.state.filters
    let filteredData = []
    let allUnchecked = true
    data.map((item, idx) => {
      Object.keys(this.state.filters).map((value) => {
        let formatedArr = data[idx].data.certifications.join(' ').toLowerCase().split(' ')
        if (this.state.filters[value]) {
          if (formatedArr.indexOf(value) !== -1) {
            filteredData.push(data[idx])
            allUnchecked = false
          }
        }
      })
    })
    if (!allUnchecked) {
      filteredData = [ ...new Set(filteredData) ]
      this.setState({
        list: filteredData
      })
    } else {
      this.setState({
        list: jsonData.dealers
      })
    }
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
