import React from 'react'

import styled from 'styled-components'

import phoneIco from '../../images/icons/phone-ico.png'
import envelopeIco from '../../images/icons/envelope.svg'

import starIco from '../../images/icons/star-ico.png'
import spareIco from '../../images/icons/spare-ico.png'
import homeIco from '../../images/icons/home-ico.png'
import usersIco from '../../images/icons/people-ico.png'

const CompanyItem = (props) => {
  const renderCertif = () => {
    return props.certifications.map((certification, idx) => {
      if (certification === 'Commercial Pro') {
        return <CertifItem className="order_4" key={ idx }> { certification } </CertifItem>
      } else if (certification === 'Residential Pro') {
        return <CertifItem className="order_3" key={ idx }> { certification } </CertifItem>
      } else if (certification === 'Service Pro') {
        return <CertifItem className="order_2" key={ idx }> { certification } </CertifItem>
      } else {
        return <CertifItem key={ idx }> { certification } </CertifItem>
      }
    })
  }

  const onClickHolder = (name, e) => {
    props.onClick(name)
  }

  return (
    <Wrap>
      <Container>
        <Header>
          <Title>
            <TitleText>
              { props.name }
            </TitleText>
          </Title>
          <Phone>
            <PhoneNumber>
              { props.phone1 }
            </PhoneNumber>
          </Phone>
          <Small>
            <SmallText>
              Can’t talk now? Click below to send an email.
            </SmallText>
          </Small>
          <Contact>
            <ContactButton onClick={ onClickHolder.bind(this, props.name) }>
              Contact this Pro
            </ContactButton>
          </Contact>
          <Hours>
            <HoursTitle>
              <HoursTitleText>
                Business Hours
              </HoursTitleText>
            </HoursTitle>
            <HoursList>
              <HoursItem>
                Weekdays: { (props.weekHours.mon.length > 0) ? props.weekHours.mon : 'CLOSED' }
              </HoursItem>
              <HoursItem>
                Saturdays: { (props.weekHours.sat.length > 0) ? props.weekHours.sat : 'CLOSED' }
              </HoursItem>
              <HoursItem>
                Sundays:  { (props.weekHours.sun.length > 0) ? props.weekHours.sun : 'CLOSED' }
              </HoursItem>
            </HoursList>
          </Hours>
        </Header>
        <Certif>
          <CertifList>
            { renderCertif() }
          </CertifList>
        </Certif>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.li`
  width: 33.3%;
  text-align: center;
  margin-bottom: 20px;
`

const Container = styled.div`
  margin: 0 10px;
  border-radius: 10px;
	background-color: #fff;
	box-shadow: 0 2px 4px 1px rgba(0,0,0,.31);
`

const Header = styled.div`
  padding: 25px 15px 0;
	background-color: #fff;
`

const Title = styled.div`
  display: flex;
  margin-bottom: 35px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ececec;
  min-height: 55px;
  justify-content: center;
  align-items: center;
`

const TitleText = styled.h3`
  color: #3f3f3f;
  font-size: 1.625rem;
  font-family: 'opensans_light';
`

const Phone = styled.div`
  margin-bottom: 30px;
  padding: 5px 0;

  &:before {
    content: '';
    width: 28px;
    height: 28px;
    background-color: #216ddf;
    background-image: url(${phoneIco});
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    border-radius: 50%;
    margin-right: 30px;
  }
`

const PhoneNumber = styled.h4`
  color: #3f3f3f;
  font-size: 1.625rem;
  font-family: 'opensans_extrabold';
  display: inline-block;
  position: relative;
  top: -4px;
`

const Small = styled.div`
  margin-bottom: 28px;
`

const SmallText = styled.p`
  color: #3f3f3f;
  font-size: 0.75rem;
  font-family: 'opensans_italic';
`

const Contact = styled.div`
  margin-bottom: 40px;
`

const ContactButton = styled.button`
  color: #083d8c;
  font-size: 0.9375rem;
  font-family: 'opensans_bold';
  display: inline-block;
  background-color: transparent;
  border: 1px solid #02c7c6;
  border-radius: 5px;
  padding: 16px 20px 16px 17px;
  transition: 0.3s;
  &:before {
    content: '';
    width: 15px;
    height: 13px;
    background-image: url(${envelopeIco});
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-right: 12px;
    position: relative;
    top: 1px;
  }
  &:hover {
    background: #02c7c6;
  }
`

const Hours = styled.div`
  margin-bottom: 40px;
`

const HoursTitle = styled.div`
  margin-bottom: 10px;
`

const HoursTitleText = styled.h4`
  color: #3f3f3f;
  font-size: 0.875rem;
  font-family: 'opensans_bold';
`

const HoursList = styled.ul`

`

const HoursItem = styled.li`
  margin-bottom: 8px;
  color: #3f3f3f;
  font-size: 0.8125rem;
  font-family: 'opensans_regular';
`

const Certif = styled.div`
  background: #f6f6f6;
  padding: 25px 10px;
`

const CertifList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  min-height: 58px;
`

const CertifItem = styled.li`
  width: 50%;
  margin-bottom: 16px;
  color: #3f3f3f;
  font-size: 0.75rem;
  font-family: 'opensans_regular';
  box-sizing: border-box;
  order: 1;
  &:before {
    content: '';
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-right: 12px;
    position: relative;
    top: 1px;
    width: 13px;
    height: 13px;
  }
  &:first-child {
    text-align: right;
    padding-right: 20px;
    &:before {
      background-image: url(${starIco});
    }
  }
  &:nth-child(2) {
    text-align: left;
    padding-left: 20px;
    &:before {
      background-image: url(${spareIco});
    }
  }
  &:nth-child(3) {
    text-align: right;
    padding-right: 20px;
    &:before {
      height: 12px;
      background-image: url(${homeIco});
    }
  }
  &:nth-child(4) {
    text-align: left;
    padding-left: 20px;
    &:before {
      width: 12px;
      height: 11px;
      background-image: url(${usersIco});
    }
  }
  &.order_2 {
    order: 2;
  }
  &.order_3 {
    order: 3;
  }
  &.order_4 {
    order: 4;
  }
`

export default CompanyItem
