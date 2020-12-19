import React, { useState, useRef } from "react";
import { Row, Col, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { ReactComponent as FilterIco } from "../icons/filter_svg.svg";
import styled from "styled-components";
import useOutsideClick from "../components/widgets/useOutsideClick";

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
  right: 70%;
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
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const ref = useRef();

  useOutsideClick(ref, () => {
    console.log("You clicked outside");
  });

  const toggling = () => {
    console.log("toggling");
    setIsOpen(!isOpen);
    setSelectedTime(null);
  };

  const onOptionClicked = (value) => () => {
    setSelectedTime(value);
    console.log(selectedTime);
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
        <Main ref={ref}>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>
              <FilterIco style={{ cursor: "pointer" }} />
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <DropDownListHeader>
                    <p className="ml-5 pt-2">Filters</p>
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
                    style={{ marginLeft: "4.5rem", marginTop: "3rem" }}
                    menuAlign="right"
                    title={selectedStatus===null?'Message Statuses':selectedStatus}
                    id="dropdown-menu-align-right"
                  >
                    <Dropdown.Item onClick={()=>setSelectedStatus('Read messages')} eventKey="1">Read messages</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setSelectedStatus('Unread messages')} eventKey="2">Unread messages</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setSelectedStatus('Opened but not responded')} eventKey="3">
                      Opened but not responded
                    </Dropdown.Item>
                    <Dropdown.Item onClick={()=>setSelectedStatus('Ongoing discussion')} eventKey="4">
                      Ongoing discussion
                    </Dropdown.Item>
                    <Dropdown.Item onClick={()=>setSelectedStatus('Ended discussion')} eventKey="5">Ended discussion</Dropdown.Item>
                    {/* <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
                  </DropdownButton>

                  <DropdownButton
                    style={{ marginLeft: "4.5rem", marginTop: "3rem" }}
                    menuAlign="right"
                    title={
                      selectedTime === null
                        ? `Time of messages`
                        : selectedTime
                    }
                    id="dropdown-menu-align-right"
                  >
                    <Dropdown.Item
                      onClick={() => setSelectedTime("Last hour")}
                      eventKey="1"
                    >
                      Last hour
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedTime("12 hrs ago")}
                      eventKey="2"
                    >
                      12 hrs ago
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedTime("Today")}
                      eventKey="3"
                    >
                      Today
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedTime("This week")}
                      eventKey="4"
                    >
                      This week
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedTime("This month")}
                      eventKey="5"
                    >
                      This month
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSelectedTime("This year")}
                      eventKey="6"
                    >
                      This year
                    </Dropdown.Item>
                    {/* <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
                  </DropdownButton>
                  <Button
                    variant="warning"
                    onClick={toggling}
                    style={{
                      color: "white",
                      fontSize: "1.3rem",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                      marginLeft: "25%",
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
