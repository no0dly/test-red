import React from 'react'

import CompanyList from './CompanyList'
import CompanyFilter from './CompanyFilter'

const Content = (props) => {
  return (
    <div>
      <CompanyFilter />
      <CompanyList />
    </div>
  )
}

export default Content
