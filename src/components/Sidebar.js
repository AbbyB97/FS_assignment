import React from "react";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as OrganizationIco } from "../icons/organizations_svg.svg";
import { ReactComponent as ProfileIco } from "../icons/profile.svg";
import { ReactComponent as CarIco } from "../icons/car_svg.svg";
import { ReactComponent as SearchIco } from "../icons/search_icon.svg";
import { ReactComponent as RecruitmentIco } from "../icons/recruitment_icon.svg";
import { ReactComponent as RateIco } from "../icons/rate_svg.svg";
import { ReactComponent as SubscriptionIco } from "../icons/subscription_svg.svg";
import { ReactComponent as InboxSvg } from "../icons/inb_svg.svg";

const Sidebar = () => {
  const MenuIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill}
      className={props.class}
    ></svg>
  );

  return (
    <Row>
      <Col md={12} sm={4} xs={6}>
        <Row>
          <Col md={2} xs={1}>
            <ProfileIco fill="white" stroke="white" />
          </Col>
          <Col>
            <p>Employer Profile</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row>
          <Col md={2} xs={1}>
            <CarIco fill="white" />
          </Col>
          <Col>
            <p>Onboard Vehicles</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row>
          <Col md={2} xs={1}>
            <SearchIco stroke="white" />
          </Col>
          <Col>
            <p>Search & Hire Drivers</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row>
          <Col md={2} xs={1}>
            {/* <img alt="Organization icon" style={{fill:"#FFFFF"}} src={inbox_svg} /> */}
            <InboxSvg fill="white" stroke="white" />
          </Col>
          <Col>
            <p>Inbox </p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row>
          <Col md={2} xs={1}>
            <RecruitmentIco fill="white" />
          </Col>
          <Col>
            <p>Recruitment</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row>
          <Col md={2} xs={1}>
            <OrganizationIco fill="white" />
          </Col>
          <Col>
            <p>My Subscription</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row>
          <Col md={2} xs={1}>
            <RateIco fill="white" />
          </Col>
          <Col>
            <p>My Organizations</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row>
          <Col md={2} xs={1}>
            <SubscriptionIco fill="white" />
          </Col>
          <Col>
            <p>My Organizations</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Sidebar;
