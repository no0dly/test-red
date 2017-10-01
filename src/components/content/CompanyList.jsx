import React from 'react'
import styled from 'styled-components'

import CompanyItem from './CompanyItem'

const CompanyList = (props) => {
  const { data } = props
  const onClickHandler = (name) => {
    props.onClick(name)
  }
  const renderList = () => {
    return data.map((item) => {
      return <CompanyItem { ...item.data } onClick={ onClickHandler } key={ item.data.companyID } />
    })
  }
  return (
    <Wrap>
      <List>
        { renderList() }
      </List>
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: 1276px;
  margin: 0 auto;
  padding: 0 20px;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default CompanyList
