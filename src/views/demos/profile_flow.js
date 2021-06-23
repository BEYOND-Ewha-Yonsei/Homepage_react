import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

export default class Profile_Flow extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section bg-secondary">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Team Flow</h2>
                </Col>
              </Row>
              <Row>
                
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/김남혜_국제학부 _ Namhye Kim_International Studies.JPG")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">김남혜</span>
                        <small className="h6 text-muted">국제학부</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/반예원_사이버보안전공 _ Yewon Bahn_Cyber Security.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">반예원</span>
                        <small className="h6 text-muted">
                          사이버보안전공
                        </small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/유현선_사이버보안전공 _ Hyunsun Yoo_Cyber Security.JPG")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">유현선</span>
                        <small className="h6 text-muted">사이버보안전공</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/이주연_휴먼기계바이오공학부 _ Juyeon Lee_Mechanical _ Biomedical Engineering.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">이주연</span>
                        <small className="h6 text-muted">휴먼기계바이오공학부</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/윤기훈_사회학과 _ Kihun Yun_Sociology.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">윤기훈</span>
                        <small className="h6 text-muted">사회학과</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/이수현_컴퓨터과학과 _ Suhyun Lee_Computer Science.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">이수현</span>
                        <small className="h6 text-muted">컴퓨터학과</small>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
        </>
    )}
}