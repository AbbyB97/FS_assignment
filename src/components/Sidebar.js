import React from "react";
import { Row, Col,Modal ,Button} from "react-bootstrap";
import { ReactComponent as OrganizationIco } from "../icons/organizations_svg.svg";
import { ReactComponent as ProfileIco } from "../icons/profile.svg";
import { ReactComponent as CarIco } from "../icons/car_svg.svg";
import { ReactComponent as SearchIco } from "../icons/search_icon.svg";
import { ReactComponent as RecruitmentIco } from "../icons/recruitment_icon.svg";
import { ReactComponent as RateIco } from "../icons/rate_svg.svg";
import { ReactComponent as SubscriptionIco } from "../icons/subscription_svg.svg";
import { ReactComponent as InboxSvg } from "../icons/inb_svg.svg";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{backgroundColor:"#3b3b3b"}} closeButton>
        <Modal.Title  style={{color:"white"}} id="contained-modal-title-vcenter">
          Under construction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Comming soon!</h4>
        <p>
          This functionlity will be added soon.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Sidebar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const sideBarClick = (item) => {
    console.log(item);
    if (item === 4) {
      console.log("inbox show");
    } else {
      // alert("functionality will be added soon");
      setModalShow(true)
    }
  };

  return (
    <Row style={{backgroundColor:"#914A9C"}} className="pt-5 pb-5"  >
      <Col md={12} sm={4} xs={6}>
        <Row onClick={() => sideBarClick(1)} className="side-bar-item">
          <Col md={2} xs={1}>
            <ProfileIco fill="white" stroke="white" />
          </Col>
          <Col>
            <p className="my-auto">Employer Profile  <span className="my-auto"><i className="fas fa-angle-down ml-1"></i></span> </p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row onClick={() => sideBarClick(2)} className="side-bar-item">
          <Col md={2} xs={1}>
            <CarIco fill="white" />
          </Col>
          <Col>
            <p className="my-auto">Onboard Vehicles</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row onClick={() => sideBarClick(3)} className="side-bar-item">
          <Col md={2} xs={1}>
            <SearchIco stroke="white" />
          </Col>
          <Col>
            <p className="my-auto">Search & Hire Drivers</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row
          onClick={() => sideBarClick(4)}
          style={{ backgroundColor: "white" }}
          className="side-bar-item"
        >
          <Col md={2} xs={1}>
            <InboxSvg fill="#3b3b3b"  />
          </Col>
          <Col>
            <p style={{color:"black"}} className="my-auto">Inbox </p>
          </Col>
          <Col>
            <i style={{ color: "#ffbb00" }} className="fas fa-circle"></i>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row onClick={() => sideBarClick(5)} className="side-bar-item">
          <Col md={2} xs={1}>
            <RecruitmentIco fill="white" />
          </Col>
          <Col>
            <p className="my-auto">Recruitment</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row onClick={() => sideBarClick(6)} className="side-bar-item">
          <Col md={2} xs={1}>
            <OrganizationIco fill="white" />
          </Col>
          <Col>
            <p className="my-auto">My Subscription</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row onClick={() => sideBarClick(7)} className="side-bar-item">
          <Col md={2} xs={1}>
            <RateIco fill="white" />
          </Col>
          <Col>
            <p className="my-auto">My Organizations</p>
          </Col>
        </Row>
      </Col>
      <Col md={12} sm={4} xs={6}>
        <Row onClick={() => sideBarClick(8)} className="side-bar-item">
          <Col md={2} xs={1}>
            <SubscriptionIco fill="white" />
          </Col>
          <Col>
            <p className="my-auto">My Organizations</p>
          </Col>
        </Row>
      </Col>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Row>
  );
};

export default Sidebar;
