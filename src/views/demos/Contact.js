import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, CardImg, CardBody, Badge } from "reactstrap";

// core components

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
          <div>
          <Row className="text-center justify-content-center align-items-start">
                <Col lg="10">
                  <h1 className="display-3 mt-7">Contact Us</h1>
                </Col>
          </Row>
          </div> 
          <section className="footer has-cards section-lg">
          <Container>
              <Row className="text-center justify-content-center align-items-start">
                <Col className="mb-9 mb-md-0" md="5">
                  <Card className="shadow border-0">
                    <CardBody className="py-5 text-center">
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/theme/celo.png")}
                        width="200"
                      />
                      <div className="text-lg-center btn-wrapper">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="secondary"
                          href="hello@gobeyond.ac"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-envelope-o" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-2"
                          color="success"
                          href="https://instagram.com/beyond_ewhayonsei?utm_medium=copy_link"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-2"
                          color="github"
                          href="https://github.com/BEYOND-Ewha-Yonsei"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mb-5 mb-md-0" md="5">
                  <Card className="shadow border-0">
                    <CardBody className="py-5 text-center">
                      <img
                        alt="..."
                        className="img-center img-fluid my-2"
                        src={require("assets/img/theme/flow.png")}
                        width="184"
                        
                      />
                      <div className="text-lg-center btn-wrapper">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="secondary"
                          href="hello@gobeyond.ac"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-envelope-o" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-2"
                          color="success"
                          href="https://instagram.com/beyond_ewhayonsei?utm_medium=copy_link"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-2"
                          color="github"
                          href="https://github.com/BEYOND-Ewha-Yonsei"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
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
