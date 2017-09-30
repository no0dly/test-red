import React from 'react'
import styled from 'styled-components'

import logo from '../../images/logo.png'

import Nav from './Nav'

const HeaderBot = (props) => {
  return (
    <Wrap>
      <Container>
        <LogoWrap>
          <img src={ logo } />
        </LogoWrap>
        <Nav />
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: #fff;
  padding: 34px 20px 25px;
`

const Container = styled.div`
  max-width: 1276px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrap = styled.div`
  width: 231px;
  height: 31px;
  img {
    width: 100%;
    height: auto;
  }
`



export default HeaderBot
