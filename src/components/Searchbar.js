import React, { useState } from "react";
import { Row, Col, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { ReactComponent as FilterIco } from "../icons/filter_svg.svg";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  height: auto;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 19rem;
  right: 170px;
  top: 20px;
  border-style: solid;
  background: #ffffff;
  border-radius: 10px;
  border-width: 1px;
  border-color: gray;
`;

const DropDownListHeader = styled("div")`
  background-color: #6b6565;
  color: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-weight: 900;
  text-align: left;
  height: 3rem;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 5px;
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

const options = ["Mangoes", "Apples", "Oranges"];

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Row style={{ marginTop: "1rem" }}>
      <Col md={8}>
        <div
          style={{ width: "100%" }}
          className="ui field left icon input search-bar"
        >
          <input
            style={{ borderRadius: "20px" }}
            type="email"
            placeholder={"Search,users,messages or chat id's"}
          />
          <i className="search icon med"></i>
        </div>
      </Col>
      <Col md={4}>
        <Main>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>
              <FilterIco />
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <DropDownListHeader>
                    <p class="ml-5 pt-2">Header</p>
                  </DropDownListHeader>
                  {/* {options.map((option) => (
                    <ListItem
                      onClick={onOptionClicked(option)}
                      key={Math.random()}
                    >
                      {option}
                    </ListItem>
                  ))} */}
                  <DropdownButton
                    style={{ marginLeft: "4.5rem",marginTop:"3rem" }}
                    menuAlign="right"
                    title="Dropdown right"
                    id="dropdown-menu-align-right"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton
                    style={{ marginLeft: "4.5rem" ,marginTop:"3rem"}}
                    menuAlign="right"
                    title="Dropdown right"
                    id="dropdown-menu-align-right"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <Button
                    variant="warning"
                    style={{
                      color: "white",
                      fontSize: "1.3rem",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                      marginLeft: "2rem",
                      marginRight: "3rem",
                    }}
                  >
                    Apply filters
                  </Button>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </Main>
      </Col>
    </Row>
  );
};

export default Searchbar;
