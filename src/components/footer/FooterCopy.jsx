import React from 'react'
import styled from 'styled-components'

const FooterCopy = (props) => {
  return (
    <Wrap>
      <Container>
        <List>
          <Item>
            <Link href="#">
              © 2017 Pool Pros
            </Link>
          </Item>
          <Item>
            <Link href="#">
              Privacy Policy
            </Link>
          </Item>
          <Item>
            <Link href="#">
              Terms and Conditions
            </Link>
          </Item>
        </List>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: #216ddf;
`

const Container = styled.div`
  max-width: 1316px;
  margin: 0 auto;
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 15px 20px 20px;
`

const Item = styled.li`
  &:before {
    content: "|";
    color: #fff;
  }
  &:first-child:before {
    display: none;
  }
`

const Link = styled.a`
  padding: 0 15px;
  text-decoration: none;
  color: #fff;
  font-size: 0.75rem;
  font-family: 'opensans_regular';
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`

export default FooterCopy
