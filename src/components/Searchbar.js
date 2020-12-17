import React from "react";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as FilterIco } from "../icons/filter_svg.svg";

const Searchbar = () => {
  return (
    <Row style={{marginTop:"1rem"}}>
      <Col md={8}>
        <div style={{width:"100%"}} className="ui field left icon input search-bar">
          <input
            style={{ borderRadius: "20px" }}
            type="email"
            placeholder={"Search,users,messages or chat id's"}
          />
          <i className="search icon med"></i>
        </div>
      </Col>
      <Col md={4}><FilterIco className="mt-1"/></Col>
    </Row>
  );
};

export default Searchbar;
