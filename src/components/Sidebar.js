import React from "react";
import { Row, Col } from "react-bootstrap";
const Sidebar = () => {
  return (
      <Row>
        <Col md={12} sm={4} xs={6}>Employee profile</Col>
        <Col md={12} sm={4} xs={6}>Onboard vehicles</Col>
        <Col md={12} sm={4} xs={6}>Search & Hire Drivers</Col>
        <Col md={12} sm={4} xs={6}>Inbox</Col>
        <Col md={12} sm={4} xs={6}>Recruitment</Col>
        <Col md={12} sm={4} xs={6}>My Organisations</Col>
        <Col md={12} sm={4} xs={6}>RateA Driver</Col>
        <Col md={12} sm={4} xs={6}>My Subscription</Col>
      </Row>
  );
};

export default Sidebar;
