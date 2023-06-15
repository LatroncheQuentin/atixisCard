import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faMap } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faListCheck,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const building = {
  name: "Atixis",
  cover: "https://www.batiactu.com/images/auto/620-465-c/20150420_120020_9.jpg",
  description: [
    {
      title: "address",
      content: "20 av André Prothin 92927 La Défense",
      icon: faLocationDot,
    },
    {
      title: "floors",
      content: "5 étages",
      icon: faBuilding,
    },
  ],
  widgets: [
    { icon: faLayerGroup, title: "GED" },
    { icon: faMap, title: "2D PLAN" },
    { icon: faListCheck, title: "TASKS" },
  ],
};

const Card = () => {
  return (
    <Container
      style={{ minHeight: "100vh", height: "100vh" }}
      className="container-fluid bg-white"
    >
      <div
        variant="white"
        className="col-4 m-card shadow tile"
        style={{
          position: "relative",
          minWidth: "700px",
          borderRadius: "5px",
        }}
      >
        <div
          className="rounded float-start m-img img-fluid col-2 row-2 shadow tile__cover"
          style={{
            backgroundImage: `url(${building.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "285px",
            zIndex: "10",
            position: "absolute",
            left: "10px",
            objectFit: "cover",
          }}
        ></div>
        <div className="text-div tile__body">
          <Row style={{ marginLeft: "-3.5rem", position: "static" }}>
            <Col></Col>
            <Col>
              <h5
                className="bg-name text-name tile__name"
                style={{
                  width: "8rem",
                  marginBottom: "2rem",
                  marginTop: "1.5rem",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  textAlign: "center",
                }}
              >
                <strong>{building.name}</strong>
              </h5>
              <div>
                {building.description.map(({ icon, content }) => {
                  return (
                    <p
                      className="text-div tile__field"
                      style={{
                        marginBottom: "2rem",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        style={{ marginRight: "1rem" }}
                        className="text-div tile__field__icon"
                        size="xl"
                      />
                      {content}
                    </p>
                  );
                })}
              </div>
            </Col>
          </Row>
          <footer className="bg-footer text-footer m-footer py-4">
            <Row style={{ width: "100%", marginLeft: "-2rem" }}>
              <Col></Col>
              <Col style={{ display: "flex", marginLeft: "1rem" }}>
                {building.widgets.map((widget, index) => {
                  return (
                    <>
                      <span style={{}} className=" widget">
                        <div style={{ textAlign: "center" }}>
                          <FontAwesomeIcon icon={widget.icon} size="2xl" />
                        </div>
                        <p
                          style={{
                            marginBottom: "0rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {widget.title}
                        </p>
                      </span>
                    </>
                  );
                })}
              </Col>
            </Row>
          </footer>
        </div>
      </div>
    </Container>
  );
};

export default Card;
