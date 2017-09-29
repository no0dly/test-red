import React from 'react'
import styled from 'styled-components'

import footerLogo from '../../images/footer-logo.png'
import twitterIco from '../../images/icons/twitter-icon.png'
import facebookIco from '../../images/icons/facebook-icon.png'
import youtubeIco from '../../images/icons/youtube-icon.png'

const FooterShare = (props) => {
  return (
    <Wrap>
      <Container>
        <LogoWrap>
          <img src={ footerLogo } />
        </LogoWrap>
        <Share>
          <ShareSlogan>
            <ShareSloganText>
              CONNECT WITH US
            </ShareSloganText>
          </ShareSlogan>
          <ShareList>
            <ShareItem>
              <ShareLink className="twitter" href="#">
                <img src={ twitterIco } />
              </ShareLink>
            </ShareItem>
            <ShareItem>
              <ShareLink className="facebook" href="#">
                <img src={ facebookIco } />
              </ShareLink>
            </ShareItem>
            <ShareItem>
              <ShareLink className="youtube" href="#">
                <img src={ youtubeIco } />
              </ShareLink>
            </ShareItem>
          </ShareList>
        </Share>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: #083d8c;
  padding: 35px 0 32px;
`

const Container = styled.div`
  max-width: 1316px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoWrap = styled.div`
  width: 190px;
  height: 25px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: auto;
  }
`

const Share = styled.div`
  display: flex;
  align-items: center;
`

const ShareSlogan = styled.div`
  margin-right: 30px;
`

const ShareSloganText = styled.h3`
  color: #fff;
  font-size: 0.951875rem;
  font-family: 'opensans_bold';
`

const ShareList = styled.ul`
  display: flex;
  align-items: center;
`

const ShareItem = styled.li`
  margin-right: 15px;
`

const ShareLink = styled.a`
  display: block;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  img {
    width: 100%;
    height: auto;
  }
`

export default FooterShare
