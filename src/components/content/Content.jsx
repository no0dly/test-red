import React, { Component } from 'react'

import styled from 'styled-components'

import waterBg from '../../images/water-image.png'

import CompanyList from './CompanyList'
import CompanyFilter from './CompanyFilter'
import EmailPopup from './EmailPopup'

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
      },
      totalAmount: 0,
      isShown: 0,
      showPopup: false,
      selectedCompany: ''
    }
  }
  componentDidMount() {
    this.setState({
      list: jsonData.dealers,
      totalAmount: jsonData.dealers.length,
      isShown: jsonData.dealers.length
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
        list: filteredData,
        isShown: filteredData.length
      })
    } else {
      this.setState({
        list: jsonData.dealers,
        isShown: jsonData.dealers.length
      })
    }
  }

  togglePopup(name) {
    const { showPopup } = this.state
    if (!showPopup && name) {
      document.body.style.overflow = 'hidden'
      this.setState({
        showPopup: !showPopup,
        selectedCompany: name
      })
    } else {
      document.body.style.overflow = 'auto'
      this.setState({
        showPopup: !showPopup,
        selectedCompany: ''
      })
    }
  }

  render() {
    const { filters, list, totalAmount, isShown, showPopup, selectedCompany } = this.state
    const renderPopup = () => {
      if (showPopup) {
        return <EmailPopup onClick={ this.togglePopup.bind(this) } name={ selectedCompany } />
      }
    }
    return (
      <Wrap>
        <CompanyFilter filters={ filters } result={ isShown } totalAmount={ totalAmount } onChange={ this.onChange.bind(this) } />
        <CompanyList data={ list } onClick={ this.togglePopup.bind(this) } />
        { renderPopup() }

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
