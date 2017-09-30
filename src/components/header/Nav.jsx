import React from 'react'
import styled from 'styled-components'

import markerIco from '../../images/icons/marker.svg'

const Nav = (props) => {
  return (
    <Wrap>
      <List>
        <Item>
          <Link href="#">
            Pools & Spas
          </Link>
        </Item>
        <Item>
          <Link href="#">
            Supplies
          </Link>
        </Item>
        <Item>
          <Link href="#">
            Resources
          </Link>
        </Item>
        <Item>
          <Link href="#">
            Services
          </Link>
        </Item>
      </List>
      <AdditionLinkWrap>
        <AdditionLink href="#">
          <SvgWrap>
            <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 12 16" xmlSpace="preserve">
                <g>
                	<defs>
                		<path id="SVGID_1_" d="M6,8.9c1.6,0,2.9-1.3,2.9-2.9c0-1.6-1.3-2.9-2.9-2.9S3.2,4.5,3.2,6C3.2,7.6,4.5,8.9,6,8.9z M6,0
                			c3.3,0,6,2.9,6,6.3c0,4.7-5.2,9.7-5.2,9.7c-0.7,0.7-1.2,0.6-1.8,0c0,0-5.1-4.9-5.1-9.7C0,2.9,2.7,0,6,0z" />
                	</defs>
                	<clipPath id="SVGID_2_">
                		<use xlinkHref="#SVGID_1_" />
                	</clipPath>
                	<g className="st0">
                		<defs>
                			<rect id="SVGID_3_" x="-1212.4" y="-82.6" width="1440" height="1699"/>
                		</defs>
                		<clipPath id="SVGID_4_">
                			<use xlinkHref="#SVGID_3_"/>
                		</clipPath>
                		<rect x="-5" y="-5" className="st1" width="22.1" height="26.5"/>
                	</g>
                </g>
                </svg>
          </SvgWrap>
          Find a Pool Pro
        </AdditionLink>
      </AdditionLinkWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
`

const LogoWrap = styled.div`

`

const List = styled.ul`
  display: flex;

`

const Item = styled.li`
  margin-left: 60px;
`

const Link = styled.a`
  text-decoration: none;
  color: #083d8c;
  font-size: 0.9375rem;
  font-family: 'opensans_bold';
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`

const AdditionLinkWrap = styled.div`
  margin-left: 85px;
`

const AdditionLink = styled.a`
  text-decoration: none;
  color: #216ddf;
  font-size: 0.9375rem;
  font-family: 'opensans_bold';
  transition: 0.3s;
  border: 1px solid #216ddf;
  border-radius: 5px;
  display: block;
  padding: 15px 40px 18px 42px;
  // background-image: url(${markerIco});
  // background-repeat: no-repeat;
  // background-size: 12px 16px;
  // background-position: 50% 50%;
  &:hover {
    opacity: 0.8;
  }
`

const SvgWrap = styled.div`
  svg {
    width: 12px;
    height: 16px;
  }
  .st0{
    clip-path:url(#SVGID_2_);
  }
  .st1{
    clip-path:url(#SVGID_4_);
    fill:#216DDF;
  }
`

export default Nav
