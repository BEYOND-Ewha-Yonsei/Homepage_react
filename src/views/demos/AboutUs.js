
import React from "react";

// reactstrap components
import {  Container, Row, Col } from "reactstrap";

class AboutUs extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section section-lg bg-secondary">
            <Container>
              <Row className="justify-content-md-center my-6">
              <Row className="justify-content-md-center ">
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                  <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/brand/ewha-chain-logo.png")}
                  />
                  </div>
                </Col>
                <Col className="align-items-center justify-content-center row" lg={{size: "auto"}}>
                  <h1 className="display-2">×</h1>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                  <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/brand/YBL-logo.png")}
                  />
                  </div>
                </Col>
                </Row>
                <Col className="justify-content-md-center">
                <div className="text-center justify-content-center row">
                  <h4 className="display-3">B
                    <small className="text muted">lockchain{" "}</small>
                  </h4>
                  <h4 className="display-3"> E
                    <small className="text muted">wha</small>
                  </h4>
                  <h4 className="display-3"> Y
                    <small className="text muted">onsei</small>
                  </h4>
                  <h4 className="display-3"> OND</h4>
                  <p className="text-gray">
                  '~을 넘어선, 저편의'이라는 뜻과 같이 BEYond는 블록체인이라는 기술을 통해 저 너머에 있는 탈중앙화의 이념을 추구하고 싶은 학생들의 연합입니다. 미래지향적인 밀레니엄 세대들로 구성된 이화여자대학교와 연세대학교의 블록체인 학회원들이 만나 더욱 더 발전 가능한 새로운 커뮤니티를 형성하였습니다.
                  </p>
                </div>
              </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default AboutUs;
