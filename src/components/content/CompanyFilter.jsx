import React from 'react'
import styled from 'styled-components'

const CompanyFilter = (props) => {
  const onChangeHandler = (name, e) => {
    props.onChange(name)
  }
  return (
    <Wrap>
      <Container>
        <Results>
          <ResultsText>
            { props.result } dealers in { props.totalAmount }
          </ResultsText>
        </Results>
        <Filters>
          <FiltersTitle>
            <FiltersTitleText>
              Filter Results
            </FiltersTitleText>
          </FiltersTitle>
          <FiltersList>
            <FiltersItem>
              <input
                onChange={ onChangeHandler.bind(this, 'service') }
                checked={ props.filters.service }
                className="filter__checkbox" id="filter__service"
                type="checkbox"
              />
              <label htmlFor="filter__service">Service</label>
            </FiltersItem>
            <FiltersItem>
              <input
                onChange={ onChangeHandler.bind(this, 'installation') }
                checked={ props.filters.installation } className="filter__checkbox" id="filter__instalation"
                type="checkbox"
              />
              <label htmlFor="filter__instalation">Installation</label>
            </FiltersItem>
            <FiltersItem>
              <input
                onChange={ onChangeHandler.bind(this, 'residential') }
                checked={ props.filters.residential } className="filter__checkbox" id="filter__residential"
                type="checkbox"
              />
              <label htmlFor="filter__residential">Residential</label>
            </FiltersItem>
            <FiltersItem>
              <input
                onChange={ onChangeHandler.bind(this, 'commercial') }
                checked={ props.filters.commercial }
                className="filter__checkbox" id="filter__commercial" type="checkbox"
              />
              <label htmlFor="filter__commercial">Commercial</label>
            </FiltersItem>
          </FiltersList>
          <FiltersTooltip>
            <FiltersTooltipLink href="#">
              ?
            </FiltersTooltipLink>
          </FiltersTooltip>
        </Filters>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: #fff;
  padding: 0 20px;
  margin-bottom: 30px;
`

const Container = styled.div`
  max-width: 1276px;
  padding: 15px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  border-radius: 10px;
  flex-wrap: wrap;
`

const Results = styled.div`
  padding: 20px 30px;
  border-right: 1px solid #ececec;
`

const ResultsText = styled.div`
  color: #216ddf;
  font-size: 1.125rem;
  font-family: 'opensans_bold';
`

const Filters = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
`

const FiltersTitle = styled.div`
  margin-right: 50px;
`

const FiltersTitleText = styled.h3`
  color: #3f3f3f;
  font-size: 1.125rem;
  font-family: 'opensans_bold';
`

const FiltersList = styled.ul`
  display: flex;
  align-items: center;
`

const FiltersItem = styled.li`
  margin-right: 40px;
  &:last-child {
    margin-right: 10px;
  }
  label {
    display: flex;
    align-items: center;
    color: #3f3f3f;
    font-size: 0.75rem;
    font-family: 'opensans_regular';
  }
  .filter__checkbox {
    position: absolute;
    opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: '';
    margin-right: 15px;
    display: inline-block;
    vertical-align: text-top;
    width: 23px;
    height: 23px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    background: #fff;
    transition: 0.3s;
  }

  &:hover + label:before {
    border-color: #216ddf;
    box-shadow: inset 0 0 3px #216ddf;
  }

  &:checked + label:before {
    border-color: #216ddf;
    box-shadow: inset 0 0 0 8px #216ddf;
  }
}
`

const FiltersTooltip = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 2px;
  background-color: #d8d8d8;
`

const FiltersTooltipLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #216ddf;
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-size: 0.75rem;
  font-family: 'opensans_regular';
`

export default CompanyFilter
