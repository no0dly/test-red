import React from 'react'
import styled from 'styled-components'

import action from '../../images/icons/action.png'

const HeaderTop = (props) => {
  return (
    <Wrap>
      <Container>
        <List>
          <Item>
            <Link href="#">
              Dealers and Distributors
            </Link>
          </Item>
          <Item>
            <Link href="#">
              Commercial Service
              <ImageWrap>
                <img src={ action } />
              </ImageWrap>
            </Link>
          </Item>
        </List>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: #083d8c;
`

const Container = styled.div`
  max-width: 1316px;
  margin: 0 auto;
`

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 17px 20px 16px;
`

const Item = styled.li`
  margin-left: 47px;
`

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 0.75rem;
  font-family: 'opensans_regular';
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`

const ImageWrap = styled.div`
  margin-left: 10px;
  display: inline-block;
  width: 13px;
  height: 10px;
  position: relative;
  top: 2px;
  img {
    width: 100%;
    height: auto;
  }
`

export default HeaderTop
