import React, { Component } from 'react'
import styled from 'styled-components'

import closeIco from '../../images/icons/close.svg'
import arrowIco from '../../images/icons/arrow.svg'
import validatedIco from '../../images/icons/validated.svg'

export class EmailPopup extends Component {
  constructor(props) {
    super()
    this.state = {
      nameValid: false,
      phoneValid: false,
      emailValid: false
    }
  }
  render() {
    const closePopup = () => {
      this.props.onClick()
    }

    const renderValidator = (name) => {
      if (this.state[name]) {
        return <Validator className="valid" />
      } else {
        return <Validator />
      }
    }

    const checkValidation = (name, e) => {
      if (e.target.value.length > 0) {
        this.setState({
          [name]: true
        })
      } else {
        this.setState({
          [name]: false
        })
      }
    }

    return (
      <Wrap>
        <Container>
          <PopupWrap>
            <Title>
              <TitleName>
                email
              </TitleName>
              <TitleText>
                { this.props.name }
              </TitleText>
              <CloseButton onClick={ closePopup.bind(this) } />
            </Title>
            <Subtitle>
              <SubtitleText>
                Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.
              </SubtitleText>
            </Subtitle>
            <Form>
              <Header>
                <InputWrap>
                  <Label>
                    <LabelText>
                      First and last name
                    </LabelText>
                    { renderValidator('nameValid') }
                  </Label>
                  <Input type="text" name="name" onChange={ checkValidation.bind(this, 'nameValid') } />
                </InputWrap>
                <InputWrap className="half-size">
                  <Label>
                    <LabelText>
                      Phone number
                    </LabelText>
                    { renderValidator('phoneValid') }
                  </Label>
                  <Input type="phone" name="phone" onChange={ checkValidation.bind(this, 'phoneValid') } />
                </InputWrap>
                <InputWrap>
                  <Label>
                    <LabelText>
                      Email address
                    </LabelText>
                    { renderValidator('emailValid') }
                  </Label>
                  <Input type="email" name="email" onChange={ checkValidation.bind(this, 'emailValid') } />
                </InputWrap>
                <InputWrap>
                  <Label>
                    <LabelText>
                      Comments or questions
                    </LabelText>
                    <Message>
                      Optional
                    </Message>
                  </Label>
                  <Textarea name="Comments" />
                </InputWrap>
                <InputWrap>
                  <Label className="margin">
                    <LabelText>
                      Do you currently own a pool or spa?
                    </LabelText>
                    <Message>
                      Optional
                    </Message>
                  </Label>
                  <InputChoice type="radio" name="choice" id="yes" defaultChecked />
                  <LabelChoice htmlFor="yes">Yes</LabelChoice>
                  <InputChoice type="radio" name="choice" id="no" />
                  <LabelChoice htmlFor="no">No</LabelChoice>
                </InputWrap>
              </Header>
              <Footer>
                <SubmitWrap>
                  <SubmitButton type="submit">
                    Send my email
                  </SubmitButton>
                </SubmitWrap>
              </Footer>
            </Form>
            <Phrase>
              <PhraseText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
              </PhraseText>
            </Phrase>
          </PopupWrap>
        </Container>
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  background: rgba( 0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

const Container = styled.div`
  padding: 0 20px;
`

const PopupWrap = styled.div`
  max-width: 705px;
  width: 705px;
  background: #fff;
	box-shadow: 0 3px 11px 2px rgba(0,0,0,.36);
  position: absolute;
  margin: auto auto 40px;
	position: absolute;
	top: 70px; left: 50%;
  transform: translate(-50%,0);
`

const Title = styled.div`
  padding: 20px 20px 22px 35px;
  background: #083d8c;
  position: relative;
`

const TitleName = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-family: 'opensans_bold';
  text-transform: uppercase;
  margin-bottom: 15px;
`

const TitleText = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-family: 'opensans_regular';
`

const CloseButton = styled.button`
  position: absolute;
  width: 18px;
  height: 18px;
  background-image: url(${closeIco});
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  top: 20px;
  right: 20px;
  &:hover {
    cursor: pointer;
  }
`

const Subtitle = styled.div`
  padding: 30px 35px;
`

const SubtitleText = styled.div`
  color: #616161;
  font-size: 0.9375rem;
  font-family: 'opensans_regular';
`

const Form = styled.div`
  margin: 0px 35px 30px;
  padding: 20px 25px;
  background-color: #f6f6f6;
  * {
    box-sizing: border-box;
  }
`

const Header = styled.div`
  border-bottom: 1px solid #ececec;
  margin-bottom: 40px;
`

const InputWrap = styled.div`
  margin-bottom: 15px;
  &.half-size {
    width: 40%;
  }
`

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  &.margin {
    margin-bottom: 15px;
  }
`

const LabelText = styled.p`
  color: #616161;
  font-size: 0.875rem;
  font-family: 'opensans_bold';
`

const Validator = styled.div`
  width: 22px;
  height: 22px;
  border: 1px solid #c7c7c7;
  border-radius: 50%;
  margin-bottom: 5px;
  position: relative;
  top: -2px;
  &.valid {
    background-image: url(${validatedIco});
    background-repeat: no-repeat;
    background-position: center;
    border: none;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 15px;
  color: #616161;
  font-size: 0.9375rem;
  font-family: 'opensans_regular';
  border: 1px solid #d8d8d8;
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  color: #616161;
  font-size: 0.9375rem;
  font-family: 'opensans_regular';
  border: 1px solid #d8d8d8;
  height: 80px;
`

const InputChoice = styled.input`
  position: absolute;
  visibility: hidden;
  &:checked {
   + label {
		color: #fff;
		background-color: #01c7c6;
	}
`
const LabelChoice = styled.label`
  color: #3f3f3f;
  font-size: 0.875rem;
  font-family: 'opensans_regular';
  border: 1px solid #3f3f3f;
  border-radius: 5px;
  padding: 5px 20px;
  margin-right: 10px;
  transition: 0.3s;
`

const Message = styled.div`
  color: #bebebe;
  font-size: 0.875rem;
  font-family: 'opensans_italic';
  margin-bottom: 10px;
`
const Footer = styled.div`
  text-align: center;
`

const SubmitWrap = styled.div`

`

const SubmitButton = styled.button`
  color: #3f3f3f;
  font-size: 1rem;
  font-family: 'opensans_bold';
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 10px;
  transition: 0.3;
  &:after {
    content: '';
    width: 12px;
    height: 14px;
    background-image: url(${arrowIco});
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    display: inline-block;
    margin-left: 10px;
    position: relative;
    top: 2px;
  }
  &:hover {
    opacity: 0.8;
  }
`

const Phrase = styled.div`
  padding: 25px;
  background-color: #f6f6f6;
`

const PhraseText = styled.p`
  color: #616161;
  font-size: 0.75rem;
  font-family: 'opensans_regular';
`

export default EmailPopup
